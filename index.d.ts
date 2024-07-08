declare const svgIcons: {
    warn: string;
    error: string;
    info: string;
    success: string;
    "": string;
};
type iconfont = `icon-${string}`;
declare const autolog: {
    log(text?: string, type?: keyof typeof svgIcons | iconfont, time?: number): void;
    customIcons(icons: Record<string, string>): void;
};
export default autolog;
