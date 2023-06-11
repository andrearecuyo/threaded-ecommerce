// Fetch navigation items from navigation.json File
function fetchNavigationItems() {
  fetch('../utils/navigation.json')
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((nav) => {
        output += 
        `<li onclick="location.href='index.html'">
          ${nav.item}
        </li>`
      })
      document.getElementById('navigation').innerHTML = output;
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('navigation').innerHTML = 'Error Loading Data'
    })
  }
  
fetchNavigationItems();

// Fetch navigation items from navigation.json File
function fetchNavigationIcons() {
  fetch('../utils/navigationIcon.json')
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((nav) => {
        output += 
        `<li onclick="location.href='index.html'">
          <iconify-icon icon="${nav.icon}" class="icon"></iconify-icon>
        </li>`
      })
      document.getElementById('navigation-icons').innerHTML = output;
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('navigation-icons').innerHTML = 'Error Loading Data'
    })
  }
  
  fetchNavigationIcons();

// Fetch benefits data from benefits.json File
function fetchBenefits() {
  fetch('../utils/benefits.json')
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((item) => {
        output += 
        `<li onclick="location.href='index.html'">
          <iconify-icon icon="${item.icon}" class="icon"></iconify-icon>
          ${item.benefit}
        </li>`
      })
      document.getElementById('benefits').innerHTML = output;
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('benefits').innerHTML = 'Error Loading Data'
    })
  }
  
fetchBenefits();

// Fetch sitewideDeals data from sitewideDeals.json File
function fetchSitewideDeals() {
  fetch('../utils/sitewideDeals.json')
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((item) => {
        output += 
        `<li>
          <div>
            <div class="top">
              <h1>$ ${item.discountFee}</h1>
              <h2>off</h2>
            </div>
          </div>
          <p>${item.discount}</p>
        </li>`
      })
      document.getElementById('sitewide-deals').innerHTML = output;
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('sitewide-deals').innerHTML = 'Error Loading Data'
    })
  }
  
fetchSitewideDeals();

// Fetch trendingGallery data from trendingGallery.json File
function fetchTrendingGallery() {
  fetch('../utils/trendingGallery.json')
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((item) => {
        output += 
        `<div class="trending-items">
          <a target="_blank" href="#">
            <img src="${item.image}" alt="${item.description}">
            <div class="description">${item.description}</div>
          </a>
        </div>`
      })
      document.getElementById('trending-gallery').innerHTML = output;
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('trending-gallery').innerHTML = 'Error Loading Data'
    })
  }
  
fetchTrendingGallery();

// Fetch trendingHashtags data from trendingHashtags.json File
function fetchTrendingHashtags() {
  fetch('../utils/trendingHashtags.json')
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((item) => {
        output += 
        `<button type="submit" class="trending-hashtags-button" onclick="location.href='index.html'">${item.hashtag}</button>`
      })
      document.getElementById('trending-hashtags').innerHTML = output;
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('trending-hashtags').innerHTML = 'Error Loading Data'
    })
  }
  
fetchTrendingHashtags();

// Fetch recentlyBought data from recentlyBought.json File
function fetchRecentlyBought() {
  fetch('../utils/recentlyBought.json')
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((item) => {
        if (item.discount !== null) {
          output += 
          `<div class="recently-items">
            <a target="_blank" href="#">
              <img src="${item.image}" alt="${item.description}">
              <div class="description">${item.description}</div>
              <div class="recently-discounted-items">
                <div class="total discounted-total">$ ${item.discount}</div>
                <div class="total old-total">$ ${item.total}</div>
              </div>
            </a>
          </div>`
        } else {
          output += 
          `<div class="recently-items">
            <a target="_blank" href="#">
              <img src="${item.image}" alt="${item.description}">
              <div class="description">${item.description}</div>
              <div>
                <div class="total">$ ${item.total}</div>
              </div>
            </a>
          </div>`
        }
      })
      document.getElementById('recently-bought-gallery').innerHTML = output;
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('recently-bought-gallery').innerHTML = 'Error Loading Data'
    })
  }
  
fetchRecentlyBought();


// Fetch instagramPosts data from instagramPosts.json File
function fetchInstagramPost() {
  fetch('../utils/instagramPosts.json')
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((item) => {
        output += 
        `<div class="instagram-post-gallery-items">
          <a target="_blank" href="#">
            <img src="${item.image}" alt="${item.image}">
          </a>
        </div>`
      })
      document.getElementById('instagram-post-gallery').innerHTML = output;
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('instagram-post-gallery').innerHTML = 'Error Loading Data'
    })
  }
  
fetchInstagramPost();

// Fetch footerCompanyInfo data from footerCompanyInfo.json File
function fetchCompanyInfo() {
  fetch('../utils/footerCompanyInfo.json')
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((item) => {
        output += 
        `<a href="#">
          <li>${item.value}</li>
        </a>`
      })
      document.getElementById('footer-company-info').innerHTML = output;
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('footer-company-info').innerHTML = 'Error Loading Data'
    })
  }
  
fetchCompanyInfo();

// Fetch footerHelpSupport data from footerHelpSupport.json File
function fetchHelpSupportInfo() {
  fetch('../utils/footerHelpSupport.json')
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((item) => {
        output += 
        `<a href="#">
          <li>${item.value}</li>
        </a>`
      })
      document.getElementById('footer-help').innerHTML = output;
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('footer-help').innerHTML = 'Error Loading Data'
    })
  }
  
fetchHelpSupportInfo();

// Fetch footerCustomerCare data from footerCustomerCare.json File
function fetchCustomerCareInfo() {
  fetch('../utils/footerCustomerCare.json')
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((item) => {
        output += 
        `<a href="#">
          <li>${item.value}</li>
        </a>`
      })
      document.getElementById('footer-customer-care').innerHTML = output;
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('footer-customer-care').innerHTML = 'Error Loading Data'
    })
  }
  
fetchCustomerCareInfo();


// Fetch footerSocialMedia data from footerSocialMedia.json File
function fetchSocialMediaIcons() {
  fetch('../utils/footerSocialMedia.json')
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((item) => {
        output += 
        `<li>
          <a href="#">
            <iconify-icon icon="${item.icon}" class="icon"></iconify-icon>
          </a>
        </li>`
      })
      document.getElementById('footer-social-media').innerHTML = output;
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('footer-social-media').innerHTML = 'Error Loading Data'
    })
  }
  
fetchSocialMediaIcons();

// Fetch footerPaymentOptions data from footerPaymentOptions.json File
function fetchPaymentOptions() {
  fetch('../utils/footerPaymentOptions.json')
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((item) => {
        output += 
        ` <li>
            <a href="#">
              <img src="${item.image}" alt="${item.image}" class="payment-img" />
            </a>
          </li>`
      })
      document.getElementById('footer-payment').innerHTML = output;
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('footer-payment').innerHTML = 'Error Loading Data'
    })
  }
  
fetchPaymentOptions();