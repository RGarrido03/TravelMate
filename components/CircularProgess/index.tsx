import Svg, { Circle, Path, Text as SvgText, G } from "react-native-svg";
import { useColorScheme } from "react-native";

export const CircularProgress = ({ percentage, circumference }: Props) => {
    const strokeDasharray: string = `${circumference} ${circumference}`;
    const strokeDashoffset: number = circumference - (circumference * percentage) / 100;
    const isLightMode: boolean = useColorScheme() === "light";

    return (
        <Svg height="60em" width="60em" viewBox="0 0 80 80">
            <G>
                <Circle cx="40" cy="40" r="36" stroke="#D9D9D9" strokeWidth="3" />
                <SvgText
                    x="32"
                    y="45"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="600"
                    fill={isLightMode ? "#3B4949" : "#fff"}
                >
                    {percentage}%
                </SvgText>
                <Path
                    d="M40 4.6322 a 35.3678 35.3678 0 0 1 0 70.7356 a 35.3678 35.3678 0 0 1 0 -70.7356"
                    stroke={isLightMode ? "#D9D9D9" : "#555"}
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset="0"
                    transform="rotate(-90) translate(-80)"
                />
                <Path
                    d="M40 4.6322 a 35.3678 35.3678 0 0 1 0 70.7356 a 35.3678 35.3678 0 0 1 0 -70.7356"
                    stroke={percentage === 100 ? "#FF4500" : percentage > 75 ? "#EB8C6F" : "#70D9D3"}
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
