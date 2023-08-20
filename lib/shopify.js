const domain = process.env.SHOPIFY_URL;
const accessToken = process.env.STOREFRONT_API_KEY;

async function ShopifyData(query) {
    const URL = `https://${domain}/api/2023-07/graphql.json`;
  
    const options = {
      endpoint: URL,
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": accessToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };
  
    try {
      const data = await fetch(URL, options).then((response) => {
        return response.json();
      });
  
      return data;
    } catch (error) {
      throw new Error("Products not fetched", error);
    }
  }

  export async function getProductsInCollection() {
    const query = `
    {
        collection(handle: "tables") {
          id
          title
          products(first: 25) {
            edges {
              node {
                id
                title
                description
                media(first: 1) {
                    edges {
                        node {
                            ...mediaFieldsByType
                        }
                    }
                }
              }
            }
          }
        }
      }
      fragment mediaFieldsByType on Media {
        ... on Model3d {
            sources {
            url
          }
        }
      }`;
  
    const response = await ShopifyData(query);
    console.log(response);
    const allProducts = response.data.collection.products.edges
      ? response.data.collection.products.edges
      : [];

  
    return allProducts;
  }

  export async function get3dModuleUrlFromProduct(productId) {
    const query = `
    {
        product(id: ${productId}) {
          id
          media(first: 10) {
            edges {
              node {
                ...mediaFieldsByType
              }
            }
          }
        }
      }
      fragment mediaFieldsByType on Media {
        ... on Model3d {
          sources {
            url
            mimeType
            format
            filesize
          }
        }
      }
    `
  }