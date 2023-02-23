import { useState } from "react";
import {
  fromMinutesPerKm,
  MinutesPerKm,
  InputProps
} from "../../lib/conversion";
import styles from './input.module.css'
import utilityStyles from '../../styles/utility.module.css'

export const MinutesPerKmInput = ({ setCannonicalKph }: InputProps) => {
  const [minutesPerKm, setMinutesPerKm] = useState<MinutesPerKm>({
    min: 0,
    sec: 0,
  });

  const onMinChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const min = event.currentTarget.valueAsNumber;
    const newMinPerKm = { ...minutesPerKm, min };
    setMinutesPerKm(newMinPerKm);
    setCannonicalKph(fromMinutesPerKm(newMinPerKm));
  };

  const onSecChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const sec = event.currentTarget.valueAsNumber;
    const newMinPerKm = { ...minutesPerKm, sec };
    setMinutesPerKm(newMinPerKm);
    setCannonicalKph(fromMinutesPerKm(newMinPerKm));
  };

  return (
    <div className={utilityStyles.verticalAlign}>
      <input className={styles.mininput} type="number" onChange={onMinChange} />{" "}
      min{" "}
      <input className={styles.secinput} type="number" onChange={onSecChange} />{" "}
      sec
    </div>
  );
};