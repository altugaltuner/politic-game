import type { StaticImageData } from "next/image";

export type StatKey =
    | "agriculture"
    | "infrastructure"
    | "internalSecurity"
    | "international"
    | "currency"
    | "publicSupport";

type DeathLayerStatKey = "agriculture" | "infrastructure" | "internalSecurity" | "international" | "budget" | "publicOpinion";
type LabelKey = "agriculture" | "infrastructure" | "internalSecurity" | "international" | "budget" | "publicSupport";

type StatMeta = {
    labelKey: LabelKey;
    deathKey: DeathLayerStatKey;
    darkCardBgClass: "bg-white" | "bg-black";
};

export type StatCardConfig = {
    key: StatKey;
    labelKey: LabelKey;
    value: number;
    animatedValue: any;
    color: string;
    icon: StaticImageData;
    iconAlt: string;
    iconSize: number;
    deathKey: DeathLayerStatKey;
    darkCardBgClass: "bg-white" | "bg-black";
};

type IconConfig = {
    icon: StaticImageData;
    iconAlt: string;
    iconSize: number;
};

type CreateStatCardsInput = {
    values: Record<StatKey, number>;
    animatedValues: Record<StatKey, any>;
    statColors: Record<StatKey, string>;
    icons: Record<StatKey, IconConfig>;
};

const STAT_META: Record<StatKey, StatMeta> = {
    agriculture: { labelKey: "agriculture", deathKey: "agriculture", darkCardBgClass: "bg-white" },
    infrastructure: { labelKey: "infrastructure", deathKey: "infrastructure", darkCardBgClass: "bg-black" },
    internalSecurity: { labelKey: "internalSecurity", deathKey: "internalSecurity", darkCardBgClass: "bg-black" },
    international: { labelKey: "international", deathKey: "international", darkCardBgClass: "bg-black" },
    currency: { labelKey: "budget", deathKey: "budget", darkCardBgClass: "bg-black" },
    publicSupport: { labelKey: "publicSupport", deathKey: "publicOpinion", darkCardBgClass: "bg-black" },
};

export const createStatCards = ({ values, animatedValues, statColors, icons }: CreateStatCardsInput): StatCardConfig[] => {
    return (Object.keys(STAT_META) as StatKey[]).map((key) => ({
        key,
        labelKey: STAT_META[key].labelKey,
        value: values[key],
        animatedValue: animatedValues[key],
        color: statColors[key],
        icon: icons[key].icon,
        iconAlt: icons[key].iconAlt,
        iconSize: icons[key].iconSize,
        deathKey: STAT_META[key].deathKey,
        darkCardBgClass: STAT_META[key].darkCardBgClass,
    }));
};