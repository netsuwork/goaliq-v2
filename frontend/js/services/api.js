window.API = {

  baseUrl: 'https://goaliq-v2.onrender.com/api',

  async get(url){

    const res = await fetch(this.baseUrl + url);

    if(!res.ok){
      throw new Error('API Error');
    }

    return res.json();
  }

};
