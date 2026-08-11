import { IMG } from "./assets";

export const SERVICES = [
  { slug: "/services/car-recovery", title: "Car Recovery", image: IMG.carRecovery, desc: "Fast, careful recovery for saloons, SUVs and family cars anywhere in Dubai, any time of day or night." },
  { slug: "/services/truck-recovery", title: "Truck Recovery", image: IMG.truckRecovery, desc: "Heavy-duty recovery for trucks, trailers and commercial fleet vehicles, handled by rated equipment and trained crews." },
  { slug: "/services/machine-recovery", title: "Machine Recovery", image: IMG.machineRecovery, desc: "Specialist recovery and transport for construction and heavy machinery, moved safely to your site or workshop." },
  { slug: "/services/bike-recovery", title: "Bike Recovery", image: IMG.bikeRecovery, desc: "Gentle, secure motorbike recovery and transport after a breakdown, accident or flat battery." },
  { slug: "/services/battery-jump-start", title: "Battery Jump-Start", image: IMG.batteryJumpStart, desc: "On-the-spot battery jump-starts to get your engine running again in minutes, wherever you're parked." },
  { slug: "/services/flat-tyres", title: "Flat Tyres", image: IMG.flatTyres, desc: "Quick roadside tyre changes and flat tyre assistance so you're back on the road without the wait." },
] as const;
