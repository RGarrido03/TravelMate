import { useColorScheme } from "react-native";
import Svg, { Circle, Path, Text as SvgText, G } from "react-native-svg";

export const CircularProgress = ({ percentage, circumference }: Props) => {
    const strokeDasharray: string = `${circumference} ${circumference}`;
    const strokeDashoffset: number = circumference - (circumference * percentage) / 100;
    return (
        <Svg height="60em" width="60em" viewBox="0 0 80 80">
            <G>
                <Circle cx="40" cy="40" r="36" fill="#FFFFFF" stroke="#D9D9D9" strokeWidth="3" />
                <SvgText
                    x="37"
                    y="45"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="600"
                    fill="#3B4949"
                >
                    {percentage}%
                </SvgText>
                <Path
                    d="M40 4.6322 a 35.3678 35.3678 0 0 1 0 70.7356 a 35.3678 35.3678 0 0 1 0 -70.7356"
                    stroke="#D9D9D9"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset="0"
                    transform="rotate(-90) translate(-80)"
                />
                <Path
                    d="M40 4.6322 a 35.3678 35.3678 0 0 1 0 70.7356 a 35.3678 35.3678 0 0 1 0 -70.7356"
                    stroke="#70D9D3"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    transform="rotate(0) translate(0)"
                />
            </G>
        </Svg>
    );
};

interface Props {
    percentage: number;
    circumference: number;
}
