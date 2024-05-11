import React from "react";

function MostLoved() {
  let items = [
    {
      imgUrl:
        "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
      title: "Birthday Bliss Cake",
      desc: "Indulge in layers of moist vanilla sponge filled with decadent chocolate ganache and adorned with vibrant rainbow sprinkles. Topped with creamy buttercream frosting, this birthday cake is a delightful centerpiece for any celebration. Every bite is a symphony of sweetness, making each birthday moment unforgettable.",
    },
    {
      imgUrl:
        "https://ocakes.in/hyderabad/storage/app/public/images/item/item-643d25c9e2e39.jpg",
      title: "Petite Pastel Pastries",
      desc: "Delicate puff pastry envelopes a luscious cream filling, creating a heavenly experience with every bite. These pastries are adorned with a pastel palette of icing, adding a touch of elegance to any gathering. Whether enjoyed with a cup of coffee or as a dainty dessert, each pastry promises a melt-in-your-mouth sensation that leaves a lasting impression.",
    },
    {
      imgUrl:
        "https://thundersbakery.ie/wp-content/uploads/2022/10/CC0A7047-scaled.jpg",
      title: "Elegance Envisioned Wedding Cake",
      desc: "A masterpiece of culinary artistry, our wedding cake is a testament to love and celebration. Layers of moist almond sponge alternate with velvety raspberry preserves, creating a harmonious blend of flavors. Adorned with intricate fondant designs and delicate sugar flowers, this cake is a symbol of elegance and romance. Every slice is a celebration of union, marking the beginning of a lifetime of happiness.",
    },
    {
        imgUrl:
          "https://cakeindulge.ph/wp-content/uploads/2023/07/353897619_771030224560769_6175912140105736464_n-1.jpg",
        title: "Whimsy Wonderland Custom Cake",
        desc: "Step into a whimsical wonderland with our customized kids' cake, where imagination knows no bounds! Crafted with layers of moist chocolate and vanilla cake, this confection is a canvas for your child's dreams to come to life. From favorite cartoon characters to magical unicorns, our talented decorators bring fantasies to fruition with vibrant frosting and edible decorations. Spark joy and laughter at your child's next birthday bash with a cake that's as unique and playful as they are."
      },
    
  ];

  return (
    <section>
      <center>
        <h1 className="loved-h1">Most Loved Items</h1>
        <div className="loved-items">
          {items.map((data, index) => (
            <div key={index} className="card" style={{width: "18rem"}}>
              <img src={data.imgUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">
                  {data.desc.length > 100 ? data.desc.slice(0, 100) : data.desc}
                ...</p>
              </div>
            </div>
          ))}
        </div>
      </center>
    </section>
  );
}

export default MostLoved;
