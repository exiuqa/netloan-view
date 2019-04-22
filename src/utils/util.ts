import Cookies from "js-cookie";
/**
 * 设置浏览器标题
 * @param title 
 */
export function setTitle(title: string):void{
    window.document.title = title || "admin";
}
/**
 * 设置token
 * @param token 
 */
export function setToken(tokenName:string):void{
 
}

/**
 * 获取token
 */
export function getToken(tokenName:string = "token"):string|undefined{
  return Cookies.get(tokenName)
}