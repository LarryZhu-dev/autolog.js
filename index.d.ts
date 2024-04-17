type logType = "log" | "warn" | "warning" | "error" | "info" | "success" | "ok" | "done";
type logTime = number;
declare interface autolog {
  /**
   * - text（必填）：需要输出的文本
   * - type（可选）：输出类型 默认是 "log"
   * - time（可选）：停留时间 默认是 2500
   */
  log(text: string, type?: logType | logTime, time?: number): void;
}
declare const autolog: autolog;
export default autolog;