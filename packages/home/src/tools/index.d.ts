// 从 storage.js 导出
export const $session: {
  [key: string]: any;
};
export const $local: {
  [key: string]: any;
};
export const $cache: {
  [key: string]: any;
};
export function useAutoStore(type: 'session' | 'local' | 'api', key: string, defaultValue?: any): import('vue').Ref<any>;

// 从 utils.js 导出
export function $clone<T>(target: T): T;
export function $split(target: string, splitor?: string, pos?: number): string;
export function $delay(time: number): Promise<void>;
export function $idle(): Promise<void>;
export function $pub(url: string): string;
export function fetchFile(path: string): Promise<string>;
export function fetchDemosFile(path: string): Promise<string>;
export function getI18n(obj: any, field?: string): string;
export function getAllI18n(obj: any, field?: string): string;
export function getDemoModule(path: string): any;
export function hasDemoModule(path: string): boolean;
export function debounce<T extends (...args: any[]) => any>(fn: T, delay?: number): (...args: Parameters<T>) => void;
export function throttle<T extends (...args: any[]) => any>(fn: T, delay?: number): (...args: Parameters<T>) => void;
export function scrollSmooth(element: HTMLElement | string, offset?: number): void;
export function getElementById(id: string): HTMLElement | null;
export function findParent(element: HTMLElement | null, selector: string): HTMLElement | null;
export function findNextElementSibling(element: HTMLElement | null, selector: string): HTMLElement | null;
export function isOverlap(el1: HTMLElement, el2: HTMLElement): boolean;
export function isInView(element: HTMLElement, offset?: number): boolean;
export function getBoundingClientRect(element: HTMLElement): DOMRect;
export function getNativeElement(element: any): HTMLElement | null;
export function removeDupSplitor(str: string, splitor?: string): string;
export function geneTitle(title: string, suffix?: string): string;
export function getRoutePath(path: string): string;
export function dealHrefElement(element: HTMLElement): void;
export function searchMenuItem(menus: any[], keyword: string): any[];
export function pathJoin(...paths: string[]): string;
export function single<T extends (...args: any[]) => any>(fn: T): T;
export function isObject(x: any): x is object;
export function isEmpty(value: any): boolean;
export function useCopy(): {
  copy: (text: string) => Promise<boolean>;
};

// 从 remSize.js 导出
export function $recal(): void;

// 从 appData.js 导出
export const appData: {
  lang: import('vue').Ref<string>;
  theme: import('vue').Ref<string>;
  configMode: boolean;
  bpState: import('vue').Ref<boolean>;
};
export const appFn: {
  toggleLang(): void;
  toggleTheme(): void;
};

// 从 i18n/index 导出
export const i18n: import('vue-i18n').I18n;
export function $t(key: string, ...args: any[]): string;
export function $t2(cn: string, en: string): string;

