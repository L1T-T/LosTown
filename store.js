document.addEventListener('DOMContentLoaded', function() {
    // بيانات المنتجات
    const products = [
        {
            id: 1,
            title: "حزمة العملات الذهبية",
            category: "coins",
            price: 10,
            image: "product1.jpg",
            description: "احصل على 10,000 عملة ذهبية لاستخدامها في السيرفر",
            popular: true
        },
        {
            id: 2,
            title: "سيارة لامبورغيني",
            category: "vehicles",
            price: 50,
            image: "product2.jpg",
            description: "سيارة لامبورغيني فخمة بألوان متعددة وخيارات تخصيص",
            popular: true
        },
        // المزيد من المنتجات...
    ];

    // عرض المنتجات
    function displayProducts(filteredProducts = products) {
        const productsGrid = document.querySelector('.products-grid');
        productsGrid.innerHTML = '';
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                    ${product.popular ? '<span class="product-badge">الأكثر مبيعاً</span>' : ''}
                </div>
                <div class="product-content">
                    <span class="product-category">${getCategoryName(product.category)}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price">$${product.price}</span>
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-plus"></i> أضف للسلة
                        </button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
        
        // إضافة حدث إضافة للسلة
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', addToCart);
        });
    }
    
    // فلترة المنتجات
    function filterProducts() {
        const category = document.getElementById('category').value;
        const priceRange = document.getElementById('price').value;
        const sort = document.getElementById('sort').value;
        
        let filtered = [...products];
        
        // فلترة حسب الفئة
        if (category !== 'all') {
            filtered = filtered.filter(p => p.category === category);
        }
        
        // فلترة حسب السعر
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(Number);
            if (priceRange.endsWith('+')) {
                filtered = filtered.filter(p => p.price >= 100);
            } else {
                filtered = filtered.filter(p => p.price >= min && p.price <= max);
            }
        }
        
        // ترتيب المنتجات
        if (sort === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sort === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sort === 'popular') {
            filtered.sort((a, b) => b.popular - a.popular);
        }
        
        displayProducts(filtered);
    }
    
    // إضافة للسلة
    function addToCart() {
        const productId = parseInt(this.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        
        // هنا يمكنك إضافة المنتج للسلة (localStorage أو متغير)
        showNotification();
        updateCartCount();
    }
    
    // عرض الإشعار
    function showNotification() {
        const notification = document.querySelector('.cart-notification');
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    // تحديث عداد السلة
    function updateCartCount() {
        const countElements = document.querySelectorAll('.cart-count');
        countElements.forEach(el => {
            const current = parseInt(el.textContent) || 0;
            el.textContent = current + 1;
        });
    }
    
    // أحداث الفلترة
    document.querySelectorAll('.filter-select').forEach(select => {
        select.addEventListener('change', filterProducts);
    });
    
    // تهيئة الصفحة
    displayProducts();
});

function getCategoryName(category) {
    const categories = {
        'coins': 'العملات',
        'vehicles': 'المركبات',
        'properties': 'الممتلكات',
        'ranks': 'الرتب'
    };
    return categories[category] || category;
}