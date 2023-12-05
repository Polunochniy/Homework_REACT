
export const getImageURL = () => 'https://i.ibb.co/R74YH6r/Frame-1-1.png';
export const getImageCart = () => 'https://cdn-icons-png.flaticon.com/512/3649/3649552.png';

export const getImageURLPhone = () => 'https://i.ibb.co/GkCSnnr/free-icon-phone-call-5585562.png';
export const getImageURLInstagram = () => 'https://pibig.info/uploads/posts/2022-11/1668798733_3-pibig-info-p-beloe-instagram-4.png';
export const getImageURLFacebook = () => 'https://i.postimg.cc/3RLR8MV9/Mask-group.png';
export const getImageURLYoutube = () => 'https://static-00.iconduck.com/assets.00/youtube-icon-512x359-dyeyi1hm.png';

export const getImageTrash = () => 'https://cdn-icons-png.flaticon.com/512/5525/5525518.png';
export const getImagePlus = () => 'https://cdn-icons-png.flaticon.com/128/7222/7222864.png';
export const getImageMinus = () => 'https://cdn-icons-png.flaticon.com/128/7222/7222872.png';

export const getImageHomePageOne = () => 'https://clubdelmotorista.com/wp-content/uploads/2019/03/suzuki-katana-2019-1-1000x640.jpg';
export const getImageHomePageTwo = () => 'https://img1.akspic.ru/crops/7/9/6/5/5/155697/155697-suzuki_katana-suzuki-motocikl-peremeshivat-sportivnyj_motocikl-1366x768.jpg';
export const getImageHomePageThree = () => 'https://a.storyblok.com/f/110134/573x573/cfcc5b5ce0/gsx1300ram0_fueltank-1.jpg';

export const orderDataUpdate = (items = []) => {
    return items.map(({quantity, _id}) => ({good: {_id}, count: Number(quantity) }))
};


