export type LabelMods = "active" | "deactive" | "pending";

export interface LabelProps {
    mode: LabelMods;
    children: string;
}

export interface LabelWrapperProps {
    mode: LabelMods;
}