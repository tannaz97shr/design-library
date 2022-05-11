
import { parseToRgb, rgba } from 'polished';


export const colorToRgba = (color: string, alfa: number) => {
    const parsedColor = parseToRgb(color);
    return rgba(parsedColor.red, parsedColor.green, parsedColor.blue, alfa);
  };
  