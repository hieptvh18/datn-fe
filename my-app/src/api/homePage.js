import instanceJson from "./instanceJson";

export const getBannerHomePage = () => {
    const url = "/bannerHome"
    return instanceJson.get(url)
}