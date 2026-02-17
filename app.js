const form = document.getElementById("batteryForm"); 

const resultText = document.getElementById("resultText"); 

const tipText = document.getElementById("tipText"); 

  

/** 

* Heel simpele "verbruiksprofielen" (mAh per uur). 

* Niet wetenschappelijk: puur voor demo/gevoel. 

*/ 

const profiles = { 

  basic:    { baseDrainPerHour: 8 },   // zuinig 

  standard: { baseDrainPerHour: 12 },  // gemiddeld 

  pro:      { baseDrainPerHour: 16 }   // zwaarder 

}; 

  

function clamp(num, min, max){ 

  return Math.max(min, Math.min(max, num)); 

} 

  

function calcDrainMultiplier({ gps, aod, notifications }){ 

  let multiplier = 1; 

  

  if (gps) multiplier += 0.35; 

  if (aod) multiplier += 0.25; 

  if (notifications) multiplier += 0.15; 

  

  return multiplier; 

} 

  

function makeTip(days){ 

  if (days >= 7) return "Nice! Je zit in de ‘ik-laad-op-wanneer-ik-er-aan-denk’ categorie."; 

  if (days >= 3) return "Prima! Met een vaste oplaadroutine (bijv. tijdens douchen) zit je safe."; 

  if (days >= 1) return "Oke, maar let op: GPS en always-on tikken hard aan."; 

  return "Dit wordt spannend 😅 Zet GPS/always-on uit of verhoog je batterijcapaciteit."; 

} 

  

form.addEventListener("submit", (e) => { 

  e.preventDefault(); 

  

  const watchType = document.getElementById("watchType").value; 

  const capacity = Number(document.getElementById("capacity").value); 

  const usageHours = Number(document.getElementById("usageHours").value); 

  

  const gps = document.getElementById("gps").checked; 

  const aod = document.getElementById("aod").checked; 

  const notifications = document.getElementById("notifications").checked; 

  

  const profile = profiles[watchType] ?? profiles.standard; 

  

  const safeCapacity = clamp(capacity, 100, 2000); 

  const safeUsageHours = clamp(usageHours, 0, 24); 

  

  // basisverbruik: actief + "standby" (rest van de dag) 

  const standbyHours = 24 - safeUsageHours; 

  

  const drainActive = profile.baseDrainPerHour * 1.4; // actief is zwaarder 

  const drainStandby = profile.baseDrainPerHour * 0.6; // standby is lichter 

  

  const multiplier = calcDrainMultiplier({ gps, aod, notifications }); 

  

  const dailyConsumption = 

    ((safeUsageHours * drainActive) + (standbyHours * drainStandby)) * multiplier; 

  

  const days = safeCapacity / dailyConsumption; 

  

  const roundedDays = Math.max(0, days); 

  const pretty = roundedDays >= 1 

    ? `${roundedDays.toFixed(1)} dagen` 

    : `${(roundedDays * 24).toFixed(1)} uur`; 

  

  resultText.textContent = `Geschatte batterijduur: ${pretty} (model: ${watchType})`; 

  tipText.textContent = makeTip(roundedDays); 

}); 

 