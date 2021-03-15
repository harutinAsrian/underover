import React from "react";
import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const PrettoSlider = withStyles({
  root: {
    color: "#C9E6F3",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "(178, 255, 255, 0.7) 0 0px 0 4px",
    },
  },
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 25,
    label: "25",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 75,
    label: "75",
  },
  {
    value: 99,
    label: "99",
  },
];

export default function SliderComponent({ setSliderValue }) {
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <PrettoSlider
      step={1}
      track="normal"
      // value={typeof sliderValue === "number" ? sliderValue : 50}
      defaultValue={50}
      onChange={handleSliderChange}
      aria-labelledby="input-slider"
      marks={marks}
      min={1}
      max={99}
      valueLabelDisplay="on"
    />
  );
}
