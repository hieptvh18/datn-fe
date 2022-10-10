import instance from "./instance";

export const getBannerHomePage = () =>{
    const url = "/bannerHome"
    return instance.get(url)
}