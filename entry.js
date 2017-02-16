/**
 * Created by Amy on 2017/2/10.
 */
    //var a = require('./a');
    //console.log(a);
    import modB from './b'

    require('./style.scss');

    let div = document.getElementById('d1');

    div.innerHTML = '<h1>holle webpack</h1>' + modB.a + modB.b;

     [0, 15, 30, 45, 60, 75, 90, 105, 120].map((time,index) => {
            console.log(time)
            console.log(index,1111)

        })
    function compare(val ,compareVal) {
        return val >= compareVal
    }

  //添加购物车功能
  const addToCart = (cart, item, quantity) => {
    cart.items.push({
        item,
        quantity,
    });
    //console.log(cart,111)
    return cart;
  }
  const originalCart = {
      items: [],
  };
  const cart = addToCart(
      originalCart,
      {
          name:'Digital SLR Camera',
          price:'1495',
      },
      1
  );
    function touchAndLog(touchFn) {
        let data = { key: 'value' };
        touchFn(data);
        console.log(data.key)
    }
    touchAndLog();

  console.log('holle git')

