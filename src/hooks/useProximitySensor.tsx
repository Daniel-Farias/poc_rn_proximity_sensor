import { useEffect, useRef, useState } from "react";
import proximity, { SubscriptionRef } from "rn-proximity-sensor";

interface IValues {
  distance: number; // 0 to 10 (cm)
  is_close: boolean;
  is_toggle: boolean;
  is_double_toggle: boolean;
}

export function useProximitySensor() {
  const sensorSubscriptionRef = useRef<SubscriptionRef | null>(null);
  const [proximityValue, setProximityValue] = useState({} as IValues);

  useEffect(() => {
    sensorSubscriptionRef.current = proximity.subscribe((values: IValues) => {
      setProximityValue(values);
    });

    return () => {
      if (sensorSubscriptionRef.current) {
        sensorSubscriptionRef.current.unsubscribe();
        sensorSubscriptionRef.current = null;
      }
    };
  }, []);

  return proximityValue;
}
