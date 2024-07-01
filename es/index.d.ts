declare const svgIcons: {
    warn: string;
    error: string;
    info: string;
    success: string;
    "": string;
};
declare const autolog: {
    log(text?: string, type?: keyof typeof svgIcons, time?: number): void;
};
export default autolog;
