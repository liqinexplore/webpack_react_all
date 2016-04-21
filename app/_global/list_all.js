
module.exports={
    menu_structure: [{
        name: "圈子",
        type: "level",
        icon: "share-alt",
        keyID:"1",
        router: "/circle",
        child: [{
            name: "内容管理",
            type: "group",
            icon: "save",
            keyID:"2",
            router: "",
            child: [{
                name: "圈子",
                icon: "appstore-o",
                keyID:"3",
                router: "/circle/items"
            }, {
                name: "圈帖",
                icon: "book",
                keyID:"4",
                router: "/circle/posts"
            }, {
                name: "圈评",
                icon: "file-text",
                keyID:"5",
                router: "/circle/components"
            }]
        },{
            name: "序列管理",
            type: "level",
            icon: "tablet",
            keyID:"8",
            router: "",
            child: [{
                name: "精选",
                icon: "star-o",
                keyID:"9",
                router: "/circle/amazing"
            },{
                name: "发现",
                icon: "heart-o",
                keyID:"10",
                router: "/circle/discovery"
            },{
                name: "轮播图",
                icon: "picture",
                keyID:"11",
                router: "/circle/gallery"
            }]
        }]
    }, {
        name: "线下（生活和活动）",
        type: "level",
        keyID:"12",
        icon: "book",
        router: "",
        child: [{
            name: "广告",
            keyID:"13",
            icon: "shopping-cart",
            router: "underline/ad"
        }, {
            name: "商品",
            keyID:"14",
            icon: "shopping-cart",
            router: "underline/goods"
        }, {
            name: "商家",
            keyID:"15",
            icon: "shopping-cart",
            router: "underline/seller"
        }, {
            name: "品牌",
            keyID:"16",
            icon: "shopping-cart",
            router: "underline/brand"
        }, {
            name: "活动",
            keyID:"17",
            icon: "team",
            router: "underline/party"
        }]
    }]
};