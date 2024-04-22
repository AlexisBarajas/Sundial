

const navigateTo = (navigation: any, route : string, params : any) => {
  navigation.navigate(route, params);
};

export {navigateTo};