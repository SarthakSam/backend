(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background: #eee !important;\n  }\n  \n  .wrapper {\n    margin-top: 80px;\n    margin-bottom: 80px;\n  }\n  \n  .form-signin {\n    max-width: 380px;\n    padding: 15px 35px 45px;\n    margin: 0 auto;\n    background-color: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n  }\n  \n  .form-signin .form-signin-heading,\n  .form-signin .checkbox {\n    margin-bottom: 30px;\n  }\n  \n  .form-signin .checkbox {\n    font-weight: normal;\n  }\n  \n  .form-signin .form-control {\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px;\n    box-sizing: border-box;\n  }\n  \n  .form-signin .form-control:focus {\n    z-index: 2;\n  }\n  \n  .form-signin input[type=\"text\"] {\n    margin-bottom: -1px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  \n  .form-signin input[type=\"password\"] {\n    margin-bottom: 20px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n  "

/***/ }),

/***/ "./src/app/add/add.component.html":
/*!****************************************!*\
  !*** ./src/app/add/add.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <form class=\"form-signin\" action=\"/api/listings\" method=\"POST\">       \n      <h2 class=\"form-signin-heading\">Add a book for sale</h2>\n      <input type=\"number\" name=\"seller\" class=\"form-control\" placeholder=\"User Id\" value=\"{{userId}}\" readonly>\n      <input type=\"text\" class=\"form-control\" name=\"bookname\" placeholder=\"Book Name\" required=\"\" autofocus=\"\" />\n      <input type=\"text\" class=\"form-control\" name=\"authorname\" placeholder=\"Author Name\" required=\"\"/>      \n      <input type=\"number\" class=\"form-control\" name=\"price\" placeholder=\"Price\" required=\"\"/>\n      <input type=\"number\" class=\"form-control\" name=\"condition\" placeholder=\"Condition\" min=\"1\" max=\"4\" required=\"\"/>\n     \n      <div *ngIf= \"imageUploaded\">\n        <input type=\"text\"  class=\"form-control\"  name=\"imageofitem\" value=\"{{imageURL}}\" readonly />\n      </div>\n     \n      <div *ngIf= \"!imageUploaded\">\n        <input type=\"file\"  class=\"form-control\"  name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n        <button type=\"button\" class=\"btn btn-success btn-s\"(click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\" >\n        Upload Image before submitting the form\n  </button>\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Submit</button>   \n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _books_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../books-provider.service */ "./src/app/books-provider.service.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddComponent = /** @class */ (function () {
    function AddComponent(booksProviderService) {
        this.booksProviderService = booksProviderService;
        this.userId = 0;
        this.imageUploaded = false;
        this.imageURL = '';
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: "/api/upload", itemAlias: 'photo' });
        this.getUserData();
    }
    AddComponent.prototype.getUserData = function () {
        var _this = this;
        if (this.userId == 0)
            this.booksProviderService.getUser().subscribe(function (res) {
                console.log("getRequest in add ", res);
                if (res["statusCode"] != 400) {
                    _this.userId = res["id"];
                }
            });
    };
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            // console.log(JSON.parse(response));
            if (JSON.parse(response)["success"]) {
                alert('File uploaded successfully');
                _this.imageUploaded = true;
                _this.imageURL = "/uploads/" + JSON.parse(response)["info"];
            }
            else {
                alert('File upload failed');
                _this.imageUploaded = false;
                _this.imageURL = '';
            }
        };
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_books_provider_service__WEBPACK_IMPORTED_MODULE_1__["BooksProviderService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bookdetail/bookdetail.component */ "./src/app/bookdetail/bookdetail.component.ts");
/* harmony import */ var _books_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./books.guard */ "./src/app/books.guard.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { FormsModule } from '@angular/forms';












var routes = [
    {
        path: '',
        redirectTo: 'listing/books',
        pathMatch: 'full'
    },
    {
        path: 'listing',
        component: _listing_listing_component__WEBPACK_IMPORTED_MODULE_6__["ListingComponent"],
        children: [
            {
                path: 'books',
                component: _books_books_component__WEBPACK_IMPORTED_MODULE_10__["BooksComponent"]
            },
            {
                path: 'add',
                component: _add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"],
                canActivate: [_books_guard__WEBPACK_IMPORTED_MODULE_12__["BooksGuard"]]
            },
            {
                path: 'books/:id',
                component: _bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_11__["BookdetailComponent"],
                canActivate: [_books_guard__WEBPACK_IMPORTED_MODULE_12__["BooksGuard"]]
            },
            {
                path: 'filter/:id',
                component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_15__["FilterComponent"]
            },
            {
                path: 'profile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"]
            }
        ]
    },
    {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"]
    },
    {
        path: 'messages',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_13__["MessagesComponent"]
    },
    {
        path: 'wishlist',
        component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_14__["WishlistComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _listing_listing_component__WEBPACK_IMPORTED_MODULE_6__["ListingComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"],
                _books_books_component__WEBPACK_IMPORTED_MODULE_10__["BooksComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileSelectDirective"],
                _bookdetail_bookdetail_component__WEBPACK_IMPORTED_MODULE_11__["BookdetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_13__["MessagesComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_14__["WishlistComponent"],
                _filter_filter_component__WEBPACK_IMPORTED_MODULE_15__["FilterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [_books_guard__WEBPACK_IMPORTED_MODULE_12__["BooksGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bookdetail/bookdetail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bookdetail/bookdetail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container{\n    display: flex;\n    background: rgb(100,200,360);\n    border: 2px solid red;\n}\n\n.card-img-top{\n    margin: 10%; \n    height: 400px;\n    width: 400px;\n    background-size: cover; \n    border: 3px solid black;\n}\n\nspan{\n    color: rgb(1,0,360);\n    font-size: 30px;\n    font-weight: 800;\n    /* margin-right: 5px; */\n}\n\np{\n    font-size: 20px;\n    font-weight: 600;\n}\n\nbutton{\n    margin: auto;\n}\n\n.message{\n   margin: 3px;\n}"

/***/ }),

/***/ "./src/app/bookdetail/bookdetail.component.html":
/*!******************************************************!*\
  !*** ./src/app/bookdetail/bookdetail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img class=\"card-img-top\" src= {{bookDetails?.imageofitem}} alt= \"/uploads/book.jpeg\" readonly>\n  <div class=\"card\" style=\"width: 26rem;\">\n    <div class=\"card-body\">\n      <h1 class=\"card-title\"><span>BOOK NAME:</span>{{bookDetails?.bookname}}</h1>\n      <p class=\"card-text\"><span>AUTHOR:</span>{{bookDetails?.authorname}}</p>\n      <p class=\"card-text\"><span>PRICE:</span>{{bookDetails?.price}}</p>\n      <p class=\"card-text\"><span>QUANTITY:</span>{{bookDetails?.quantity}}</p>\n      <p class=\"card-text\"><span>CONDITION:</span>{{bookDetails?.Condition}}</p>\n      <p class=\"card-text\"><span>SELLER:</span>{{seller}}</p>\n        <button (click)=\"addToWishlist()\" class= \"btn btn-info btn-block\">ADD TO Wishlist</button>\n    </div>\n    <div id=\"Message\">\n     <h3>Write a message to  seller</h3>\n      <input type=\"text\"  class=\"form-control\"  #message placeholder=\"Write message\">\n      <button class= \"btn btn-info btn-block\" (click)=\"sendMessage(message)\">Send</button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/bookdetail/bookdetail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bookdetail/bookdetail.component.ts ***!
  \****************************************************/
/*! exports provided: BookdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookdetailComponent", function() { return BookdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _books_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../books-provider.service */ "./src/app/books-provider.service.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listing/listing.component */ "./src/app/listing/listing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookdetailComponent = /** @class */ (function () {
    function BookdetailComponent(router, booksProviderService, listingcomponent) {
        this.router = router;
        this.booksProviderService = booksProviderService;
        this.listingcomponent = listingcomponent;
        this.bookId = 0;
        this.userId = 0;
        this.userName = "";
        this.seller = "anonymous";
    }
    BookdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.paramMap.subscribe(function (params) {
            _this.bookId = +(params.get('id'));
            // console.log(this.bookId);
        });
        this.booksProviderService.getParticularBook(this.bookId).subscribe(function (res) {
            _this.bookDetails = res;
            _this.booksProviderService.getSeller(res["seller"]).subscribe(function (res) {
                console.log("sellerName", res);
                if (res["username"])
                    _this.seller = res["username"];
            });
        });
        this.booksProviderService.getUser().subscribe(function (res) {
            _this.userId = res["id"];
            _this.userName = res["username"];
            console.log(_this.userId);
        });
    };
    BookdetailComponent.prototype.addToWishlist = function () {
        console.log(this.bookId, this.userId);
        this.booksProviderService.postAddToWishlist({ bookid: this.bookId, userid: this.userId })
            .subscribe(function (res) {
            console.log(res);
            if (res["bookid"]) {
                alert("added to wishlist");
            }
            else if (res["message"]) {
                alert("already wished ");
            }
            else {
                alert("unable to add to wishlist");
            }
        });
        console.log("added to cart");
    };
    BookdetailComponent.prototype.sendMessage = function (message) {
        console.log(message.value);
        if (message.value == "" || message.value == undefined) {
            alert("message cannot be empty");
            return;
        }
        this.booksProviderService.postMessage({ bookname: this.bookDetails.bookname, recieverid: this.bookDetails.seller, sendername: this.userName, textcontent: message.value })
            .subscribe(function (res) {
            console.log(res);
            console.log(res["status"]);
            if (res["error"]) {
                alert("unable to send message");
            }
            else {
                alert("message sent to seller");
            }
        });
        message.value = "";
    };
    BookdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookdetail',
            template: __webpack_require__(/*! ./bookdetail.component.html */ "./src/app/bookdetail/bookdetail.component.html"),
            styles: [__webpack_require__(/*! ./bookdetail.component.css */ "./src/app/bookdetail/bookdetail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _books_provider_service__WEBPACK_IMPORTED_MODULE_2__["BooksProviderService"], _listing_listing_component__WEBPACK_IMPORTED_MODULE_3__["ListingComponent"]])
    ], BookdetailComponent);
    return BookdetailComponent;
}());



/***/ }),

/***/ "./src/app/books-provider.service.ts":
/*!*******************************************!*\
  !*** ./src/app/books-provider.service.ts ***!
  \*******************************************/
/*! exports provided: BooksProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksProviderService", function() { return BooksProviderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var BooksProviderService = /** @class */ (function () {
    function BooksProviderService(http) {
        this.http = http;
    }
    BooksProviderService.prototype.getBooksData = function () {
        console.log("getting Books");
        return this.http.get('/api/listings');
    };
    BooksProviderService.prototype.getParticularBook = function (bookId) {
        console.log("bookservice", bookId);
        return this.http.get('/api/listings/' + bookId);
    };
    BooksProviderService.prototype.getUser = function () {
        console.log("getting user");
        return this.http.get('/getUser');
    };
    BooksProviderService.prototype.postAddToWishlist = function (book) {
        console.log("making post request to wishlist");
        return this.http.post('/api/wishlist', book, httpOptions);
    };
    BooksProviderService.prototype.getSeller = function (sellerId) {
        console.log("getting seller");
        return this.http.get('/getUser/' + sellerId);
    };
    BooksProviderService.prototype.getWishlist = function (id) {
        return this.http.get('/api/wishlist/' + id);
    };
    BooksProviderService.prototype.postMessage = function (messageObj) {
        return this.http.post('/api/messages', messageObj, httpOptions);
    };
    BooksProviderService.prototype.getMessages = function (userId) {
        return this.http.get('/api/messages/' + userId);
    };
    BooksProviderService.prototype.filterBy = function (id) {
        return this.http.get('/api/listings/filter/' + id);
    };
    BooksProviderService.prototype.search = function (name) {
        return this.http.get('/api/listings/search/' + name);
    };
    BooksProviderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BooksProviderService);
    return BooksProviderService;
}());



/***/ }),

/***/ "./src/app/books.guard.ts":
/*!********************************!*\
  !*** ./src/app/books.guard.ts ***!
  \********************************/
/*! exports provided: BooksGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksGuard", function() { return BooksGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var _books_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books-provider.service */ "./src/app/books-provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ListingComponent } from './listing/listing.component';
var BooksGuard = /** @class */ (function () {
    // public isUserAuthenticated: boolean = false;
    function BooksGuard(booksProviderService) {
        this.booksProviderService = booksProviderService;
    }
    //   makeCall(){
    //     this.booksProviderService.getUser().subscribe(res => {
    //       console.log("getRequest",res);
    //       if(res["statusCode"]==200){
    //         console.log("Authenticated");
    //                 this.isUserAuthenticated=true;
    //         } 
    //     });
    // }
    BooksGuard.prototype.canActivate = function (next, state) {
        // console.log(this.listingComponent.isUser)
        // if(this.listingComponent.isUser)
        //   return true;
        // else
        //   return false;
        return true;
    };
    BooksGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_books_provider_service__WEBPACK_IMPORTED_MODULE_2__["BooksProviderService"]])
    ], BooksGuard);
    return BooksGuard;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageofbook{\n          width:90%;\n          height:250px;\n          margin: 0 auto;\n}"

/***/ }),

/***/ "./src/app/books/books.component.html":
/*!********************************************!*\
  !*** ./src/app/books/books.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">  \n\n    <div class=\"jumbotron\">\n       <h1 class=\"display-4\"><i class=\"fas fa-book\"></i> The BOOKS Gallery</h1>\n       <p class=\"lead\"> A place to find all kind of books.</p><br>   \n       <button class=\"btn btn-lg btn-dark btn-block\" (click)=\"addBook()\">ADD A BOOK </button>\n     </div>\n     <div class=\"row\">\n        <div class=\"card col-lg-4 col-sm-6\" *ngFor=\"let book of listing\"\t>\n            <img class=\" img-thumbnail\" src={{book.imageofitem}} class=\"imageofbook\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">NAME: {{book.bookname}}</h4>\n              <p class=\"card-text\">AUTHOR: {{book.authorname}}</p>\n              <button class=\"btn btn-outline-info btn-lg btn-block\" (click)= \"viewBook(book)\">VIEW</button>  \n         </div> \n     </div>\n\n</div>     "

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _books_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../books-provider.service */ "./src/app/books-provider.service.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BooksComponent = /** @class */ (function () {
    function BooksComponent(router, route, booksProviderService, listingComponent) {
        this.router = router;
        this.route = route;
        this.booksProviderService = booksProviderService;
        this.listingComponent = listingComponent;
        this.listFilter = 0;
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    BooksComponent.prototype.getData = function () {
        var _this = this;
        this.booksProviderService.getBooksData().subscribe(function (res) {
            _this.listing = res;
            console.log(_this.listing);
        });
    };
    BooksComponent.prototype.addBook = function () {
        //  console.log(this.mainpageComponent.user);
        if (!this.listingComponent.user)
            this.route.navigate(['signin']);
        else {
            this.route.navigate(['listing/add']);
        }
    };
    BooksComponent.prototype.viewBook = function (book) {
        // console.log("in view book",book);
        if (this.listingComponent.isUser)
            this.route.navigate([book.id], { relativeTo: this.router });
        else
            this.route.navigate(['signin']);
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _books_provider_service__WEBPACK_IMPORTED_MODULE_1__["BooksProviderService"], _listing_listing_component__WEBPACK_IMPORTED_MODULE_2__["ListingComponent"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/filter/filter.component.css":
/*!*********************************************!*\
  !*** ./src/app/filter/filter.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageofbook{\n    width:90%;\n    height:250px;\n    margin: 0 auto;\n}\n\n.container{\n    margin-top: 20px;\n}"

/***/ }),

/***/ "./src/app/filter/filter.component.html":
/*!**********************************************!*\
  !*** ./src/app/filter/filter.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n    <div class=\"card col-lg-4 col-sm-6\" *ngFor=\"let book of listing\"\t>\n        <img class=\" img-thumbnail\" src={{book.imageofitem}} class=\"imageofbook\">\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">NAME: {{book.bookname}}</h4>\n          <p class=\"card-text\">AUTHOR: {{book.authorname}}</p>\n          <button class=\"btn btn-outline-info btn-lg btn-block\" (click)= \"viewBook(book)\">VIEW</button>  \n     </div> \n </div>\n <h1 *ngIf=\"length==0\">NO SUCH BOOK OR AUTHOR</h1>\n</div>"

/***/ }),

/***/ "./src/app/filter/filter.component.ts":
/*!********************************************!*\
  !*** ./src/app/filter/filter.component.ts ***!
  \********************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _books_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../books-provider.service */ "./src/app/books-provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterComponent = /** @class */ (function () {
    function FilterComponent(router, route, listingComponent, booksProviderService) {
        this.router = router;
        this.route = route;
        this.listingComponent = listingComponent;
        this.booksProviderService = booksProviderService;
        this.selected = 0;
        this.length = 0;
    }
    FilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.paramMap.subscribe(function (params) {
            _this.selected = +(params.get('id'));
            // console.log(this.selected)
            if (_this.selected === 1 || _this.selected === 2) {
                _this.booksProviderService.filterBy(_this.selected).subscribe(function (res) {
                    // console.log(res);
                    _this.listing = res;
                    _this.length = _this.listing.length;
                });
            }
            else if (_this.selected === 3) {
                //  console.log(this.listingComponent.searchString); 
                _this.booksProviderService.search(_this.listingComponent.searchString).subscribe(function (res) {
                    console.log(res);
                    _this.listing = res;
                    _this.length = _this.listing.length;
                });
            }
        });
    };
    FilterComponent.prototype.viewBook = function (book) {
        // console.log("in view book",book);
        if (this.listingComponent.isUser)
            this.route.navigate(['listing/books', book.id]);
        else
            this.route.navigate(['signin']);
    };
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/filter/filter.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _listing_listing_component__WEBPACK_IMPORTED_MODULE_2__["ListingComponent"], _books_provider_service__WEBPACK_IMPORTED_MODULE_3__["BooksProviderService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/listing/listing.component.css":
/*!***********************************************!*\
  !*** ./src/app/listing/listing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav div {\n    color: white;\n    font-size: 20px;\n}\n\n\ndiv *{\n     margin-left: 6px;\n     margin-right: 6px;\n}\n\n\n.jumbotron{\n    color:  #2c3e50;\n    background-color: #ecf0f1;\n    height: 200px;\n}\n\n\ndiv #user{\n    display: flex;\n}\n\n\n.forming{\n    display: flex;\n}\n\n\n.forming input{\n    width: 250px;\n}"

/***/ }),

/***/ "./src/app/listing/listing.component.html":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top\">\n        <div class=\"container\">\n          <h2>BOOKAPP</h2>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n         <div class=\"forming\">   \n            <input class=\"form-control mr-sm-2\"  #str placeholder=\"Search by name or author of book\" aria-label=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"searchForBook(str)\">Search</button>\n          </div>\n            <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto \">\n              <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  FILTER\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                  <a class=\"dropdown-item\" [routerLink]=\"['filter/1']\" preserveQueryParams preserveFragment>BY PRICE</a>\n                  <a class=\"dropdown-item\" [routerLink]=\"['filter/2']\" preserveQueryParams preserveFragment>BY CONDITION</a>\n                </div> \n              </li>\n            </ul>\n            \n              <div *ngIf=\"!isUser\">\n                <button class=\"btn btn-dark btn-lg\" (click)=\"signin()\">SIGNIN</button>\n                <button class=\"btn btn-dark btn-lg \" (click)=\"signup()\">SIGNUP</button>\n              </div>\n              <div *ngIf= \"isUser\" id=\"user\">\n                <button class=\"btn btn-dark btn-lg \" (click)=\"wishlist()\">WISHLIST</button>\n                <button class=\"btn btn-dark btn-lg \" (click)=\"mymessages()\">MESSAGES</button> \n                <ul class=\"navbar-nav mr-auto \"> \n                <li class=\"nav-item dropdown\">\n                  <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    {{user.username}}\n                  </a>\n                  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\"  [routerLink]=\"['profile']\">PROFILE</a>\n                    <a class=\"dropdown-item\" href=\"/logout\">LOGOUT</a>\n                  </div>  \n                  </li>\n                </ul> \n              </div>\n           \n          </div>\n          \n        </div>\n      \n      </nav>\n      <router-outlet ></router-outlet>"

/***/ }),

/***/ "./src/app/listing/listing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listing/listing.component.ts ***!
  \**********************************************/
/*! exports provided: ListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _books_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../books-provider.service */ "./src/app/books-provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingComponent = /** @class */ (function () {
    //   {
    //   email: "",
    //   firstname: "",
    //   lastname: "",
    //   username: "",
    //   about: "",
    //   college: "",
    //   address: "",
    //   mobileno: ""
    // };
    function ListingComponent(router, route, booksProviderService) {
        this.router = router;
        this.route = route;
        this.booksProviderService = booksProviderService;
        this.isUser = false;
        this.user = null;
        this.searchString = "";
    }
    ListingComponent.prototype.ngOnInit = function () {
        console.log(this.isUser);
        this.getUserData();
    };
    ListingComponent.prototype.getUserData = function () {
        var _this = this;
        if (!this.isUser)
            this.booksProviderService.getUser().subscribe(function (res) {
                console.log("getRequest", res);
                if (res["statusCode"] != 400) {
                    _this.isUser = true;
                    _this.userId = res["id"];
                    _this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"](res["email"], res["firstname"], res["lastname"], res["username"], res["about"], res["college"], res["address"], res["mobileNo"]);
                }
            });
    };
    ListingComponent.prototype.signin = function () {
        this.route.navigate(['signin']);
    };
    ListingComponent.prototype.signup = function () {
        this.route.navigate(['signup']);
    };
    ListingComponent.prototype.wishlist = function () {
        this.route.navigate(['wishlist']);
    };
    ListingComponent.prototype.mymessages = function () {
        this.route.navigate(['messages']);
    };
    ListingComponent.prototype.searchForBook = function (str) {
        // console.log(str.value)
        this.searchString = str.value;
        str.value = "";
        this.route.navigate(['filter', 3], { relativeTo: this.router });
    };
    ListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__(/*! ./listing.component.html */ "./src/app/listing/listing.component.html"),
            styles: [__webpack_require__(/*! ./listing.component.css */ "./src/app/listing/listing.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _books_provider_service__WEBPACK_IMPORTED_MODULE_3__["BooksProviderService"]])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    text-align: center;\n    font-size: 50px;\n    font-weight: 800;\n}\n.card{\n    margin: 5px;\n}\n.card .card-body p span{\n    /* text-align: left; */\n    margin-left: 5px;\n    /* marg */\n    color: green;\n    font-weight: 600;\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <h1>MY MESSAGES</h1> \n  <div *ngFor=\"let message of messages\">\n      <div class=\"card\" style=\"width: 60rem;\">\n        <div class=\"card-body\">\n          <p class=\"card-title\"><span>BOOK NAME:</span>  {{message?.bookname}}</p>\n          <p class=\"card-text\"><span>SENDER NAME:</span>{{message?.sendername}}</p>\n          <p class=\"card-text\"><span>TEXT CONTENT:</span>{{message?.textcontent}}</p>\n          <p class=\"card-text\"><span>DATE AND TIME:</span>{{message?.createdAt}}</p>\n        </div>\n      </div>\n    </div>\n    <h3 *ngIf=\"length==0\">NO MESSAGES </h3>\n    </div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _books_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../books-provider.service */ "./src/app/books-provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(booksProviderService) {
        this.booksProviderService = booksProviderService;
        this.length = 0;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksProviderService.getUser().subscribe(function (res) {
            _this.booksProviderService.getMessages(res["id"]).subscribe(function (res) {
                console.log(res);
                _this.messages = res;
                length = _this.messages.length;
                // for(let i=0;i< this.wishlist.length;i++){
                //   this.booksProviderService.getParticularBook(this.wishlist[i].bookid).subscribe(res => {
                //     console.log(res);
                //     this.booksArray.push(res);
                //   });    
                //   }
            });
        });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_books_provider_service__WEBPACK_IMPORTED_MODULE_1__["BooksProviderService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Colors\n/*Fonts*/\nbody {\n    background-color: #ffbba8;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    -o-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  \n  /*Reset Heading*/\n  \n  h2,\n  p {\n    margin: 0;\n    padding: 0;\n  }\n  \n  /* Start Style*/\n  \n  .wrapper {\n    max-width: 775px;\n    min-height: 90vh;\n    background: #ddd;\n    margin: 30px auto;\n    display: flex;\n  }\n  \n  .wrapper .shapes {\n    flex: 1;\n    background: #fa6161;\n    border: 1px solid #fa6161;\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .wrapper .shapes .row {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #31cb40;\n    box-shadow: 15px 0 0 0 #fdcb03, 30px 0 0 0 #fffefe;\n    margin: 10px 0 30px 8px;\n  }\n  \n  .wrapper .shapes .column {\n    width: 100%;\n    height: 85%;\n    display: flex;\n    justify-content: space-around;\n  }\n  \n  .wrapper .shapes .column__1, .wrapper .shapes .column__2, .wrapper .shapes .column__3 {\n    flex-basis: 30%;\n  }\n  \n  .wrapper .shapes .column__1 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n  \n  .wrapper .shapes .column__1 .polygen {\n    width: 25px;\n    height: 15px;\n    background: #5486ff;\n    position: relative;\n    margin-bottom: 10px;\n  }\n  \n  .wrapper .shapes .column__1 .polygen:before {\n    content: \"\";\n    position: absolute;\n    top: -11px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 13px solid transparent;\n    border-right: 12px solid transparent;\n    border-bottom: 11px solid #5486ff;\n  }\n  \n  .wrapper .shapes .column__1 .polygen:after {\n    content: \"\";\n    position: absolute;\n    bottom: -11px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 12px solid transparent;\n    border-right: 13px solid transparent;\n    border-top: 11px solid #5486ff;\n  }\n  \n  .wrapper .shapes .column__1 .circle {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background: #fffefe;\n    margin-bottom: 0px;\n  }\n  \n  .wrapper .shapes .column__1 .traingle {\n    border: 20px solid #2f2f2f;\n    border-top-color: transparent;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    margin-bottom: 10px;\n    margin-top: -15px;\n  }\n  \n  .wrapper .shapes .column__1 .italicline {\n    width: 20px;\n    height: 20px;\n    background: transparent;\n    border-radius: 50%;\n    border: 5px solid #5486ff;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n    -webkit-transform: rotate(-105deg);\n            transform: rotate(-105deg);\n    position: relative;\n    margin-bottom: 15px;\n  }\n  \n  .wrapper .shapes .column__1 .italicline:before {\n    content: \"\";\n    position: absolute;\n    top: 4px;\n    left: 7px;\n    width: 20px;\n    height: 20px;\n    background: transparent;\n    border-radius: 50%;\n    border: 5px solid #5486ff;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    -webkit-transform: rotate(-6deg);\n            transform: rotate(-6deg);\n  }\n  \n  .wrapper .shapes .column__1 .italicline:after {\n    content: \"\";\n    width: 20px;\n    height: 20px;\n    background: transparent;\n    border-radius: 50%;\n    border: 5px solid #5486ff;\n    border-bottom-color: transparent;\n    border-right-color: transparent;\n    -webkit-transform: rotate(-80deg);\n            transform: rotate(-80deg);\n    position: absolute;\n    top: -17px;\n    left: -14px;\n  }\n  \n  .wrapper .shapes .column__1 .sm-circle {\n    border: 15px solid #fffefe;\n    border-radius: 50%;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 15px;\n  }\n  \n  .wrapper .shapes .column__1 .sm-circle:before {\n    content: \"\";\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: #fa6161;\n  }\n  \n  .wrapper .shapes .column__1 .xs-circle {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #fffefe;\n    box-shadow: 15px 0.5px 0 #5486ff, 0.5px -15px 0 #5486ff, 15px 15px 0 #fdcb03, 15px -15px 0 #fdcb03, 0.5px 15px 0 #2f2f2f, -15px 0.5px 0 #2f2f2f, -15px -15px 0 #fffefe, -15px 15px 0 #fdcb03;\n    -webkit-animation: rotateCircle 2s ease alternate infinite;\n            animation: rotateCircle 2s ease alternate infinite;\n  }\n  \n  .wrapper .shapes .column__2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n  \n  .wrapper .shapes .column__2 .line {\n    width: 30px;\n    height: 4px;\n    background: #fdcb03;\n    border-radius: 5px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  \n  .wrapper .shapes .column__2 .square {\n    width: 40px;\n    height: 40px;\n    background: #fdcb03;\n  }\n  \n  .wrapper .shapes .column__2 .half-circle {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: transparent;\n    border: 5px solid #fffefe;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-animation: rotateCircle 2s ease alternate infinite;\n            animation: rotateCircle 2s ease alternate infinite;\n  }\n  \n  .wrapper .shapes .column__2 .sm-square {\n    width: 18px;\n    height: 18px;\n    background: #5486ff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin-bottom: 30px;\n  }\n  \n  .wrapper .shapes .column__2 .sm-square:before {\n    content: \"\";\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #fa6161;\n  }\n  \n  .wrapper .shapes .column__2 .rectangle {\n    width: 33px;\n    height: 20px;\n    background: #fdcb03;\n    position: relative;\n  }\n  \n  .wrapper .shapes .column__2 .rectangle:before {\n    content: \"\";\n    position: absolute;\n    bottom: 20px;\n    left: 0;\n    border: 16.5px solid #fdcb03;\n    border-top-color: transparent;\n    border-left-color: transparent;\n    border-right-color: transparent;\n  }\n  \n  .wrapper .shapes .column__2 .star {\n    width: 20px;\n    height: 10px;\n    background: #2f2f2f;\n    position: relative;\n    margin-bottom: -14px;\n  }\n  \n  .wrapper .shapes .column__2 .star:before {\n    content: \"\";\n    position: absolute;\n    top: -11px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-radius: 15px 0 0 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 11px solid #2f2f2f;\n  }\n  \n  .wrapper .shapes .column__2 .star:after {\n    content: \"\";\n    position: absolute;\n    bottom: -11px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-top: 11px solid #2f2f2f;\n  }\n  \n  .wrapper .shapes .column__3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n  \n  @media (max-width: 600px) {\n    .wrapper .shapes .column__3 {\n      margin-right: 10px;\n    }\n  }\n  \n  .wrapper .shapes .column__3 .six-circle {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #2f2f2f;\n    /*box-shadow: 20px 0 0 $whiteColor,\n                          0 20px 0 $whiteColor,\n                          20px 20px 0 $yellowColor,\n                          0 40px 0 $blueColor,\n                          20px 40px 0 $whiteColor;*/\n    margin-top: 11px;\n    margin-right: 10px;\n    -webkit-animation: scaleCircle 2s ease alternate infinite;\n            animation: scaleCircle 2s ease alternate infinite;\n  }\n  \n  .wrapper .shapes .column__3 .pencil {\n    width: 25px;\n    height: 270px;\n    background: #4064bf;\n    box-shadow: 25px 0 0 #03a9f4;\n    position: relative;\n    margin-right: 10px;\n  }\n  \n  .wrapper .shapes .column__3 .pencil:before {\n    content: \"\";\n    position: absolute;\n    top: -20px;\n    left: 0;\n    width: 50px;\n    height: 0;\n    border-bottom: 20px solid #fffefe;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n  }\n  \n  .wrapper .shapes .column__3 .pencil:after {\n    content: \"\";\n    position: absolute;\n    top: -50px;\n    left: 10px;\n    width: 30px;\n    border-bottom: 30px solid #5486ff;\n    border-left: 15px solid transparent;\n    border-right: 14px solid transparent;\n  }\n  \n  .wrapper .form-content {\n    background: #f0f0f0;\n    border: 1px solid #f0f0f0;\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-around;\n    position: relative;\n    z-index: 2;\n  }\n  \n  .wrapper .form-content__header {\n    width: 290px;\n    text-align: center;\n  }\n  \n  .wrapper .form-content__header h2 {\n    font: 600 45px \"Nunito\", sans-serif;\n    color: #fa6161;\n    position: relative;\n  }\n  \n  .wrapper .form-content__header h2:before {\n    content: \"\";\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    background: #fa6161;\n    border-radius: 50%;\n    top: 14px;\n    left: 42px;\n    /*box-shadow: 15px 0 0 -2px $mainColor,\n                          30px 0 0 -2px $mainColor, \n                          0 12px 0 0px $mainColor, \n                          0 24px 0 0px $mainColor, \n                          15px 24px 0 0px $mainColor, \n                          30px 24px 0 -2px $mainColor, \n                          30px 12px 0 -2px $mainColor, \n                          15px 12px 0 -2px $mainColor;*/\n    -webkit-animation: sizeCircle 1.7s ease alternate infinite;\n            animation: sizeCircle 1.7s ease alternate infinite;\n  }\n  \n  .wrapper .form-content form {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .wrapper .form-content form .form-row {\n    margin-bottom: 15px;\n    text-align: center;\n    position: relative;\n    overflow: hidden;\n  }\n  \n  .wrapper .form-content form .form-row input {\n    width: 290px;\n    height: 30px;\n    border-radius: 5px;\n    outline: 0;\n    border: 0;\n    text-indent: 25px;\n    position: relative;\n  }\n  \n  .wrapper .form-content form .form-row input::-webkit-input-placeholder {\n    -webkit-transform: translateX(3%);\n            transform: translateX(3%);\n    letter-spacing: 1px;\n    font: 100 12px \"Poppins\", sans-serif;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row input:-ms-input-placeholder {\n    transform: translateX(3%);\n    letter-spacing: 1px;\n    font: 100 12px \"Poppins\", sans-serif;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row input::-ms-input-placeholder {\n    transform: translateX(3%);\n    letter-spacing: 1px;\n    font: 100 12px \"Poppins\", sans-serif;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row input::placeholder {\n    -webkit-transform: translateX(3%);\n            transform: translateX(3%);\n    letter-spacing: 1px;\n    font: 100 12px \"Poppins\", sans-serif;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row input:focus {\n    color: #fa6161;\n  }\n  \n  .wrapper .form-content form .form-row input:focus ~ .icon {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n  \n  .wrapper .form-content form .form-row label {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n  }\n  \n  .wrapper .form-content form .form-row .icon {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    padding: 7px;\n    background: transparent;\n    border-radius: 5px 0 0 5px;\n    color: #fa6161;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row .btn {\n    width: 290px;\n    font: 100 15px \"Nunito\", sans-serif;\n    padding: 10px 20px;\n    border: 0;\n    outline: 0;\n    background: #fa6161;\n    color: #fffefe;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n  \n  .wrapper .form-content form .form-row .btn:hover {\n    background-color: rgba(250, 97, 97, 0.9);\n  }\n  \n  .wrapper .form-content form .form-row p {\n    font: 200 15px \"Poppins\", sans-serif;\n  }\n  \n  .wrapper .form-content form .form-row p a {\n    text-decoration: none;\n    color: rgba(250, 97, 97, 0.5);\n  }\n  \n  .wrapper .form-content form .form-row p a:hover {\n    color: #fa6161;\n  }\n  \n  .wrapper .form-content__footer {\n    text-align: center;\n  }\n  \n  .wrapper .form-content__footer p {\n    font: 200 15px \"Poppins\", sans-serif;\n  }\n  \n  .wrapper .form-content__footer p a {\n    text-decoration: none;\n    color: #fa6161;\n  }\n  \n  .wrapper .form-content__footer p a:hover {\n    color: rgba(250, 97, 97, 0.5);\n  }\n  \n  @-webkit-keyframes sizeCircle {\n    0% {\n      box-shadow: 15px 0 0 -2px #fa6161, 30px 0 0 -2px #fa6161, 0 12px 0 0px #fa6161, 0 24px 0 0px #fa6161, 15px 24px 0 0px #fa6161, 30px 24px 0 -2px #fa6161, 30px 12px 0 -2px #fa6161, 15px 12px 0 -2px #fa6161;\n    }\n    100% {\n      box-shadow: 15px 0 0 0 #fa6161, 30px 0 0 0 #fa6161, 0 12px 0 -2px #fa6161, 0 24px 0 -2px #fa6161, 15px 24px 0 -2px #fa6161, 30px 24px 0 0 #fa6161, 30px 12px 0 0 #fa6161, 15px 12px 0 0 #fa6161;\n    }\n  }\n  \n  @keyframes sizeCircle {\n    0% {\n      box-shadow: 15px 0 0 -2px #fa6161, 30px 0 0 -2px #fa6161, 0 12px 0 0px #fa6161, 0 24px 0 0px #fa6161, 15px 24px 0 0px #fa6161, 30px 24px 0 -2px #fa6161, 30px 12px 0 -2px #fa6161, 15px 12px 0 -2px #fa6161;\n    }\n    100% {\n      box-shadow: 15px 0 0 0 #fa6161, 30px 0 0 0 #fa6161, 0 12px 0 -2px #fa6161, 0 24px 0 -2px #fa6161, 15px 24px 0 -2px #fa6161, 30px 24px 0 0 #fa6161, 30px 12px 0 0 #fa6161, 15px 12px 0 0 #fa6161;\n    }\n  }\n  \n  @-webkit-keyframes scaleCircle {\n    from {\n      background: #2f2f2f;\n      box-shadow: 20px 0 0 #fffefe, 0 20px 0 #fffefe, 20px 20px 0 #fdcb03, 0 40px 0 #5486ff, 20px 40px 0 #fffefe;\n    }\n    to {\n      background: #fffefe;\n      box-shadow: 20px 0 0 #fdcb03, 0 20px 0 #5486ff, 20px 20px 0 #fffefe, 0 40px 0 #fdcb03, 20px 40px 0 #5486ff;\n    }\n  }\n  \n  @keyframes scaleCircle {\n    from {\n      background: #2f2f2f;\n      box-shadow: 20px 0 0 #fffefe, 0 20px 0 #fffefe, 20px 20px 0 #fdcb03, 0 40px 0 #5486ff, 20px 40px 0 #fffefe;\n    }\n    to {\n      background: #fffefe;\n      box-shadow: 20px 0 0 #fdcb03, 0 20px 0 #5486ff, 20px 20px 0 #fffefe, 0 40px 0 #fdcb03, 20px 40px 0 #5486ff;\n    }\n  }\n  \n  @-webkit-keyframes rotateCircle {\n    0% {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n  \n  @keyframes rotateCircle {\n    0% {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n  \n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n  <div class=\"shapes\">\n    <div class=\"row\"></div>\n    <div class=\"column\">\n      <div class=\"column__1\">\n        <div class=\"polygen\"></div>\n        <div class=\"circle\"></div>\n        <div class=\"traingle\"></div>\n        <div class=\"italicline\"></div>\n        <div class=\"sm-circle\"></div>\n        <div class=\"xs-circle\"></div>\n      </div>\n      <div class=\"column__2\">\n        <div class=\"line\"></div>\n        <div class=\"square\"></div>\n        <div class=\"half-circle\"></div>\n        <div class=\"sm-square\"></div>\n        <div class=\"rectangle\"></div>\n        <div class=\"star\"></div>\n      </div>\n      <div class=\"column__3\">\n        <div class=\"six-circle\"></div>\n        <div class=\"pencil\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-content\">\n    <div class=\"form-content__header\">\n      <h2>PROFILE PAGE</h2>\n    </div>\n    <form  action=\"/profile\" method=\"POST\">\n      <label for=\"id\">ID</label> \n      <div class=\"form-row\">\n          <input type=\"number\" name=\"id\" value={{userId}} readonly >\n      </div>\n      <label for=\"email\">EMAIL</label> \n      <div class=\"form-row\">\n          <input type=\"email\" name=\"email\" value={{user.email}} >\n      </div>\n      <label for=\"username\">USERNAME</label>\n      <div class=\"form-row\">\n          <input type=\"text\" name=\"username\" placeholder=\"USER NAME\" value={{user.username}} >\n      </div>\n      <label for=\"firstname\">FIRST NAME</label>\n      <div class=\"form-row\">\n          <input type=\"text\" name=\"firstname\" placeholder=\"FIRST NAME\" value={{user.firstname}}>\n      </div>\n      <label for=\"lastname\">LAST NAME</label>\n      <div class=\"form-row\">\n          <input type=\"text\" name=\"lastname\" placeholder=\"LAST NAME\" value={{user.lastname}}>\n      </div>\n      <label for=\"about\">ABOUT</label>\n      <div class=\"form-row\">\n          <input type=\"textarea\" name=\"about\" placeholder=\"ABOUT YOURSELF\" value={{user.about}}>\n      </div>\n      <label for=\"mobileNo\">MOBILE NO</label>\n      <div class=\"form-row\">\n          <input type=\"text\" name=\"mobileNo\" placeholder=\"MOBILE NO\" value={{user.mobileNo}}  >\n      </div>\n      <label for=\"college\">COLLEGE</label>\n      <div class=\"form-row\">\n          <input type=\" text\" name=\"college\" placeholder=\"COLLEGE\" value={{user.college}} >\n      </div>\n      <label for=\"address\">ADDRESS</label>\n      <div class=\"form-row\">\n          <input type=\" text\" name=\"address\" placeholder=\"ADDRESS\" value={{user.address}} >\n      </div>\n      <div class=\"form-row\">\n        <button class=\"btn\" > Submit</button>\n      </div>\n    </form>\n    <div class=\"form-content__footer\">\n      <!-- <p><a href=\"#\">Forget passowrd !</a></p> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listing/listing.component */ "./src/app/listing/listing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(listingComponent) {
        this.listingComponent = listingComponent;
        // this.getUserData();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUserData();
    };
    ProfileComponent.prototype.getUserData = function () {
        this.user = this.listingComponent.user;
        this.userId = this.listingComponent.userId;
        console.log("profile", this.user);
        // console.log(this.listingComponent.isUser)
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_listing_listing_component__WEBPACK_IMPORTED_MODULE_1__["ListingComponent"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Colors\n/*Fonts*/\nbody {\n    background-color: #ffbba8;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    -o-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  \n  /*Reset Heading*/\n  \n  h2,\n  p {\n    margin: 0;\n    padding: 0;\n  }\n  \n  /* Start Style*/\n  \n  .wrapper {\n    max-width: 775px;\n    min-height: 90vh;\n    background: #ddd;\n    margin: 30px auto;\n    display: flex;\n  }\n  \n  .wrapper .shapes {\n    flex: 1;\n    background: #fa6161;\n    border: 1px solid #fa6161;\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .wrapper .shapes .row {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #31cb40;\n    box-shadow: 15px 0 0 0 #fdcb03, 30px 0 0 0 #fffefe;\n    margin: 10px 0 30px 8px;\n  }\n  \n  .wrapper .shapes .column {\n    width: 100%;\n    height: 85%;\n    display: flex;\n    justify-content: space-around;\n  }\n  \n  .wrapper .shapes .column__1, .wrapper .shapes .column__2, .wrapper .shapes .column__3 {\n    flex-basis: 30%;\n  }\n  \n  .wrapper .shapes .column__1 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n  \n  .wrapper .shapes .column__1 .polygen {\n    width: 25px;\n    height: 15px;\n    background: #5486ff;\n    position: relative;\n    margin-bottom: 10px;\n  }\n  \n  .wrapper .shapes .column__1 .polygen:before {\n    content: \"\";\n    position: absolute;\n    top: -11px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 13px solid transparent;\n    border-right: 12px solid transparent;\n    border-bottom: 11px solid #5486ff;\n  }\n  \n  .wrapper .shapes .column__1 .polygen:after {\n    content: \"\";\n    position: absolute;\n    bottom: -11px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 12px solid transparent;\n    border-right: 13px solid transparent;\n    border-top: 11px solid #5486ff;\n  }\n  \n  .wrapper .shapes .column__1 .circle {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background: #fffefe;\n    margin-bottom: 0px;\n  }\n  \n  .wrapper .shapes .column__1 .traingle {\n    border: 20px solid #2f2f2f;\n    border-top-color: transparent;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    margin-bottom: 10px;\n    margin-top: -15px;\n  }\n  \n  .wrapper .shapes .column__1 .italicline {\n    width: 20px;\n    height: 20px;\n    background: transparent;\n    border-radius: 50%;\n    border: 5px solid #5486ff;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n    -webkit-transform: rotate(-105deg);\n            transform: rotate(-105deg);\n    position: relative;\n    margin-bottom: 15px;\n  }\n  \n  .wrapper .shapes .column__1 .italicline:before {\n    content: \"\";\n    position: absolute;\n    top: 4px;\n    left: 7px;\n    width: 20px;\n    height: 20px;\n    background: transparent;\n    border-radius: 50%;\n    border: 5px solid #5486ff;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    -webkit-transform: rotate(-6deg);\n            transform: rotate(-6deg);\n  }\n  \n  .wrapper .shapes .column__1 .italicline:after {\n    content: \"\";\n    width: 20px;\n    height: 20px;\n    background: transparent;\n    border-radius: 50%;\n    border: 5px solid #5486ff;\n    border-bottom-color: transparent;\n    border-right-color: transparent;\n    -webkit-transform: rotate(-80deg);\n            transform: rotate(-80deg);\n    position: absolute;\n    top: -17px;\n    left: -14px;\n  }\n  \n  .wrapper .shapes .column__1 .sm-circle {\n    border: 15px solid #fffefe;\n    border-radius: 50%;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 15px;\n  }\n  \n  .wrapper .shapes .column__1 .sm-circle:before {\n    content: \"\";\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: #fa6161;\n  }\n  \n  .wrapper .shapes .column__1 .xs-circle {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #fffefe;\n    box-shadow: 15px 0.5px 0 #5486ff, 0.5px -15px 0 #5486ff, 15px 15px 0 #fdcb03, 15px -15px 0 #fdcb03, 0.5px 15px 0 #2f2f2f, -15px 0.5px 0 #2f2f2f, -15px -15px 0 #fffefe, -15px 15px 0 #fdcb03;\n    -webkit-animation: rotateCircle 2s ease alternate infinite;\n            animation: rotateCircle 2s ease alternate infinite;\n  }\n  \n  .wrapper .shapes .column__2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n  \n  .wrapper .shapes .column__2 .line {\n    width: 30px;\n    height: 4px;\n    background: #fdcb03;\n    border-radius: 5px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  \n  .wrapper .shapes .column__2 .square {\n    width: 40px;\n    height: 40px;\n    background: #fdcb03;\n  }\n  \n  .wrapper .shapes .column__2 .half-circle {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: transparent;\n    border: 5px solid #fffefe;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-animation: rotateCircle 2s ease alternate infinite;\n            animation: rotateCircle 2s ease alternate infinite;\n  }\n  \n  .wrapper .shapes .column__2 .sm-square {\n    width: 18px;\n    height: 18px;\n    background: #5486ff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin-bottom: 30px;\n  }\n  \n  .wrapper .shapes .column__2 .sm-square:before {\n    content: \"\";\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #fa6161;\n  }\n  \n  .wrapper .shapes .column__2 .rectangle {\n    width: 33px;\n    height: 20px;\n    background: #fdcb03;\n    position: relative;\n  }\n  \n  .wrapper .shapes .column__2 .rectangle:before {\n    content: \"\";\n    position: absolute;\n    bottom: 20px;\n    left: 0;\n    border: 16.5px solid #fdcb03;\n    border-top-color: transparent;\n    border-left-color: transparent;\n    border-right-color: transparent;\n  }\n  \n  .wrapper .shapes .column__2 .star {\n    width: 20px;\n    height: 10px;\n    background: #2f2f2f;\n    position: relative;\n    margin-bottom: -14px;\n  }\n  \n  .wrapper .shapes .column__2 .star:before {\n    content: \"\";\n    position: absolute;\n    top: -11px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-radius: 15px 0 0 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 11px solid #2f2f2f;\n  }\n  \n  .wrapper .shapes .column__2 .star:after {\n    content: \"\";\n    position: absolute;\n    bottom: -11px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-top: 11px solid #2f2f2f;\n  }\n  \n  .wrapper .shapes .column__3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n  \n  @media (max-width: 600px) {\n    .wrapper .shapes .column__3 {\n      margin-right: 10px;\n    }\n  }\n  \n  .wrapper .shapes .column__3 .six-circle {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #2f2f2f;\n    /*box-shadow: 20px 0 0 $whiteColor,\n                          0 20px 0 $whiteColor,\n                          20px 20px 0 $yellowColor,\n                          0 40px 0 $blueColor,\n                          20px 40px 0 $whiteColor;*/\n    margin-top: 11px;\n    margin-right: 10px;\n    -webkit-animation: scaleCircle 2s ease alternate infinite;\n            animation: scaleCircle 2s ease alternate infinite;\n  }\n  \n  .wrapper .shapes .column__3 .pencil {\n    width: 25px;\n    height: 270px;\n    background: #4064bf;\n    box-shadow: 25px 0 0 #03a9f4;\n    position: relative;\n    margin-right: 10px;\n  }\n  \n  .wrapper .shapes .column__3 .pencil:before {\n    content: \"\";\n    position: absolute;\n    top: -20px;\n    left: 0;\n    width: 50px;\n    height: 0;\n    border-bottom: 20px solid #fffefe;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n  }\n  \n  .wrapper .shapes .column__3 .pencil:after {\n    content: \"\";\n    position: absolute;\n    top: -50px;\n    left: 10px;\n    width: 30px;\n    border-bottom: 30px solid #5486ff;\n    border-left: 15px solid transparent;\n    border-right: 14px solid transparent;\n  }\n  \n  .wrapper .form-content {\n    background: #f0f0f0;\n    border: 1px solid #f0f0f0;\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-around;\n    position: relative;\n    z-index: 2;\n  }\n  \n  .wrapper .form-content__header {\n    width: 290px;\n    text-align: center;\n  }\n  \n  .wrapper .form-content__header h2 {\n    font: 600 45px \"Nunito\", sans-serif;\n    color: #fa6161;\n    position: relative;\n  }\n  \n  .wrapper .form-content__header h2:before {\n    content: \"\";\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    background: #fa6161;\n    border-radius: 50%;\n    top: 14px;\n    left: 42px;\n    /*box-shadow: 15px 0 0 -2px $mainColor,\n                          30px 0 0 -2px $mainColor, \n                          0 12px 0 0px $mainColor, \n                          0 24px 0 0px $mainColor, \n                          15px 24px 0 0px $mainColor, \n                          30px 24px 0 -2px $mainColor, \n                          30px 12px 0 -2px $mainColor, \n                          15px 12px 0 -2px $mainColor;*/\n    -webkit-animation: sizeCircle 1.7s ease alternate infinite;\n            animation: sizeCircle 1.7s ease alternate infinite;\n  }\n  \n  .wrapper .form-content form {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .wrapper .form-content form .form-row {\n    margin-bottom: 15px;\n    text-align: center;\n    position: relative;\n    overflow: hidden;\n  }\n  \n  .wrapper .form-content form .form-row input {\n    width: 290px;\n    height: 30px;\n    border-radius: 5px;\n    outline: 0;\n    border: 0;\n    text-indent: 25px;\n    position: relative;\n  }\n  \n  .wrapper .form-content form .form-row input::-webkit-input-placeholder {\n    -webkit-transform: translateX(3%);\n            transform: translateX(3%);\n    letter-spacing: 1px;\n    font: 100 12px \"Poppins\", sans-serif;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row input:-ms-input-placeholder {\n    transform: translateX(3%);\n    letter-spacing: 1px;\n    font: 100 12px \"Poppins\", sans-serif;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row input::-ms-input-placeholder {\n    transform: translateX(3%);\n    letter-spacing: 1px;\n    font: 100 12px \"Poppins\", sans-serif;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row input::placeholder {\n    -webkit-transform: translateX(3%);\n            transform: translateX(3%);\n    letter-spacing: 1px;\n    font: 100 12px \"Poppins\", sans-serif;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row input:focus {\n    color: #fa6161;\n  }\n  \n  .wrapper .form-content form .form-row input:focus ~ .icon {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n  \n  .wrapper .form-content form .form-row label {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n  }\n  \n  .wrapper .form-content form .form-row .icon {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    padding: 7px;\n    background: transparent;\n    border-radius: 5px 0 0 5px;\n    color: #fa6161;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row .btn {\n    width: 290px;\n    font: 100 15px \"Nunito\", sans-serif;\n    padding: 10px 20px;\n    border: 0;\n    outline: 0;\n    background: #fa6161;\n    color: #fffefe;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n  \n  .wrapper .form-content form .form-row .btn:hover {\n    background-color: rgba(250, 97, 97, 0.9);\n  }\n  \n  .wrapper .form-content form .form-row p {\n    font: 200 15px \"Poppins\", sans-serif;\n  }\n  \n  .wrapper .form-content form .form-row p a {\n    text-decoration: none;\n    color: rgba(250, 97, 97, 0.5);\n  }\n  \n  .wrapper .form-content form .form-row p a:hover {\n    color: #fa6161;\n  }\n  \n  .wrapper .form-content__footer {\n    text-align: center;\n  }\n  \n  .wrapper .form-content__footer p {\n    font: 200 15px \"Poppins\", sans-serif;\n  }\n  \n  .wrapper .form-content__footer p a {\n    text-decoration: none;\n    color: #fa6161;\n  }\n  \n  .wrapper .form-content__footer p a:hover {\n    color: rgba(250, 97, 97, 0.5);\n  }\n  \n  @-webkit-keyframes sizeCircle {\n    0% {\n      box-shadow: 15px 0 0 -2px #fa6161, 30px 0 0 -2px #fa6161, 0 12px 0 0px #fa6161, 0 24px 0 0px #fa6161, 15px 24px 0 0px #fa6161, 30px 24px 0 -2px #fa6161, 30px 12px 0 -2px #fa6161, 15px 12px 0 -2px #fa6161;\n    }\n    100% {\n      box-shadow: 15px 0 0 0 #fa6161, 30px 0 0 0 #fa6161, 0 12px 0 -2px #fa6161, 0 24px 0 -2px #fa6161, 15px 24px 0 -2px #fa6161, 30px 24px 0 0 #fa6161, 30px 12px 0 0 #fa6161, 15px 12px 0 0 #fa6161;\n    }\n  }\n  \n  @keyframes sizeCircle {\n    0% {\n      box-shadow: 15px 0 0 -2px #fa6161, 30px 0 0 -2px #fa6161, 0 12px 0 0px #fa6161, 0 24px 0 0px #fa6161, 15px 24px 0 0px #fa6161, 30px 24px 0 -2px #fa6161, 30px 12px 0 -2px #fa6161, 15px 12px 0 -2px #fa6161;\n    }\n    100% {\n      box-shadow: 15px 0 0 0 #fa6161, 30px 0 0 0 #fa6161, 0 12px 0 -2px #fa6161, 0 24px 0 -2px #fa6161, 15px 24px 0 -2px #fa6161, 30px 24px 0 0 #fa6161, 30px 12px 0 0 #fa6161, 15px 12px 0 0 #fa6161;\n    }\n  }\n  \n  @-webkit-keyframes scaleCircle {\n    from {\n      background: #2f2f2f;\n      box-shadow: 20px 0 0 #fffefe, 0 20px 0 #fffefe, 20px 20px 0 #fdcb03, 0 40px 0 #5486ff, 20px 40px 0 #fffefe;\n    }\n    to {\n      background: #fffefe;\n      box-shadow: 20px 0 0 #fdcb03, 0 20px 0 #5486ff, 20px 20px 0 #fffefe, 0 40px 0 #fdcb03, 20px 40px 0 #5486ff;\n    }\n  }\n  \n  @keyframes scaleCircle {\n    from {\n      background: #2f2f2f;\n      box-shadow: 20px 0 0 #fffefe, 0 20px 0 #fffefe, 20px 20px 0 #fdcb03, 0 40px 0 #5486ff, 20px 40px 0 #fffefe;\n    }\n    to {\n      background: #fffefe;\n      box-shadow: 20px 0 0 #fdcb03, 0 20px 0 #5486ff, 20px 20px 0 #fffefe, 0 40px 0 #fdcb03, 20px 40px 0 #5486ff;\n    }\n  }\n  \n  @-webkit-keyframes rotateCircle {\n    0% {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n  \n  @keyframes rotateCircle {\n    0% {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n  "

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"shapes\">\n      <div class=\"row\"></div>\n      <div class=\"column\">\n        <div class=\"column__1\">\n          <div class=\"polygen\"></div>\n          <div class=\"circle\"></div>\n          <div class=\"traingle\"></div>\n          <div class=\"italicline\"></div>\n          <div class=\"sm-circle\"></div>\n          <div class=\"xs-circle\"></div>\n        </div>\n        <div class=\"column__2\">\n          <div class=\"line\"></div>\n          <div class=\"square\"></div>\n          <div class=\"half-circle\"></div>\n          <div class=\"sm-square\"></div>\n          <div class=\"rectangle\"></div>\n          <div class=\"star\"></div>\n        </div>\n        <div class=\"column__3\">\n          <div class=\"six-circle\"></div>\n          <div class=\"pencil\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-content\">\n      <div class=\"form-content__header\">\n        <h2>BOOKAPP</h2>\n      </div>\n      <form  action=\"/signin\" method=\"POST\">\n        <div class=\"form-row\">\n  \n          <input type=\"email\" name=\"email\" placeholder=\"E-mail\" required>\n        </div>\n        <div class=\"form-row\">\n          <input type=\"password\" name=\"password\" placeholder=\"Password\" required>\n        </div>\n        <div class=\"form-row\">\n          <button class=\"btn\" > Sign In</button>\n        </div>\n        <div class=\"form-row\">\n          <p>Don't have an account ? <a [routerLink]=\"['/signup']\" >Create one</a></p>\n        </div>\n      </form>\n      <div class=\"form-content__footer\">\n        <!-- <p><a href=\"#\">Forget passowrd !</a></p> -->\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = /** @class */ (function () {
    function SigninComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Colors\n/*Fonts*/\nbody {\n    background-color: #ffbba8;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    -o-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  \n  /*Reset Heading*/\n  \n  h2,\n  p {\n    margin: 0;\n    padding: 0;\n  }\n  \n  /* Start Style*/\n  \n  .wrapper {\n    max-width: 775px;\n    min-height: 90vh;\n    background: #ddd;\n    margin: 30px auto;\n    display: flex;\n  }\n  \n  .wrapper .shapes {\n    flex: 1;\n    background: #fa6161;\n    border: 1px solid #fa6161;\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .wrapper .shapes .row {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #31cb40;\n    box-shadow: 15px 0 0 0 #fdcb03, 30px 0 0 0 #fffefe;\n    margin: 10px 0 30px 8px;\n  }\n  \n  .wrapper .shapes .column {\n    width: 100%;\n    height: 85%;\n    display: flex;\n    justify-content: space-around;\n  }\n  \n  .wrapper .shapes .column__1, .wrapper .shapes .column__2, .wrapper .shapes .column__3 {\n    flex-basis: 30%;\n  }\n  \n  .wrapper .shapes .column__1 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n  \n  .wrapper .shapes .column__1 .polygen {\n    width: 25px;\n    height: 15px;\n    background: #5486ff;\n    position: relative;\n    margin-bottom: 10px;\n  }\n  \n  .wrapper .shapes .column__1 .polygen:before {\n    content: \"\";\n    position: absolute;\n    top: -11px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 13px solid transparent;\n    border-right: 12px solid transparent;\n    border-bottom: 11px solid #5486ff;\n  }\n  \n  .wrapper .shapes .column__1 .polygen:after {\n    content: \"\";\n    position: absolute;\n    bottom: -11px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 12px solid transparent;\n    border-right: 13px solid transparent;\n    border-top: 11px solid #5486ff;\n  }\n  \n  .wrapper .shapes .column__1 .circle {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background: #fffefe;\n    margin-bottom: 0px;\n  }\n  \n  .wrapper .shapes .column__1 .traingle {\n    border: 20px solid #2f2f2f;\n    border-top-color: transparent;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    margin-bottom: 10px;\n    margin-top: -15px;\n  }\n  \n  .wrapper .shapes .column__1 .italicline {\n    width: 20px;\n    height: 20px;\n    background: transparent;\n    border-radius: 50%;\n    border: 5px solid #5486ff;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n    -webkit-transform: rotate(-105deg);\n            transform: rotate(-105deg);\n    position: relative;\n    margin-bottom: 15px;\n  }\n  \n  .wrapper .shapes .column__1 .italicline:before {\n    content: \"\";\n    position: absolute;\n    top: 4px;\n    left: 7px;\n    width: 20px;\n    height: 20px;\n    background: transparent;\n    border-radius: 50%;\n    border: 5px solid #5486ff;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    -webkit-transform: rotate(-6deg);\n            transform: rotate(-6deg);\n  }\n  \n  .wrapper .shapes .column__1 .italicline:after {\n    content: \"\";\n    width: 20px;\n    height: 20px;\n    background: transparent;\n    border-radius: 50%;\n    border: 5px solid #5486ff;\n    border-bottom-color: transparent;\n    border-right-color: transparent;\n    -webkit-transform: rotate(-80deg);\n            transform: rotate(-80deg);\n    position: absolute;\n    top: -17px;\n    left: -14px;\n  }\n  \n  .wrapper .shapes .column__1 .sm-circle {\n    border: 15px solid #fffefe;\n    border-radius: 50%;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 15px;\n  }\n  \n  .wrapper .shapes .column__1 .sm-circle:before {\n    content: \"\";\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: #fa6161;\n  }\n  \n  .wrapper .shapes .column__1 .xs-circle {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #fffefe;\n    box-shadow: 15px 0.5px 0 #5486ff, 0.5px -15px 0 #5486ff, 15px 15px 0 #fdcb03, 15px -15px 0 #fdcb03, 0.5px 15px 0 #2f2f2f, -15px 0.5px 0 #2f2f2f, -15px -15px 0 #fffefe, -15px 15px 0 #fdcb03;\n    -webkit-animation: rotateCircle 2s ease alternate infinite;\n            animation: rotateCircle 2s ease alternate infinite;\n  }\n  \n  .wrapper .shapes .column__2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n  \n  .wrapper .shapes .column__2 .line {\n    width: 30px;\n    height: 4px;\n    background: #fdcb03;\n    border-radius: 5px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  \n  .wrapper .shapes .column__2 .square {\n    width: 40px;\n    height: 40px;\n    background: #fdcb03;\n  }\n  \n  .wrapper .shapes .column__2 .half-circle {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: transparent;\n    border: 5px solid #fffefe;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-animation: rotateCircle 2s ease alternate infinite;\n            animation: rotateCircle 2s ease alternate infinite;\n  }\n  \n  .wrapper .shapes .column__2 .sm-square {\n    width: 18px;\n    height: 18px;\n    background: #5486ff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin-bottom: 30px;\n  }\n  \n  .wrapper .shapes .column__2 .sm-square:before {\n    content: \"\";\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #fa6161;\n  }\n  \n  .wrapper .shapes .column__2 .rectangle {\n    width: 33px;\n    height: 20px;\n    background: #fdcb03;\n    position: relative;\n  }\n  \n  .wrapper .shapes .column__2 .rectangle:before {\n    content: \"\";\n    position: absolute;\n    bottom: 20px;\n    left: 0;\n    border: 16.5px solid #fdcb03;\n    border-top-color: transparent;\n    border-left-color: transparent;\n    border-right-color: transparent;\n  }\n  \n  .wrapper .shapes .column__2 .star {\n    width: 20px;\n    height: 10px;\n    background: #2f2f2f;\n    position: relative;\n    margin-bottom: -14px;\n  }\n  \n  .wrapper .shapes .column__2 .star:before {\n    content: \"\";\n    position: absolute;\n    top: -11px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-radius: 15px 0 0 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 11px solid #2f2f2f;\n  }\n  \n  .wrapper .shapes .column__2 .star:after {\n    content: \"\";\n    position: absolute;\n    bottom: -11px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-top: 11px solid #2f2f2f;\n  }\n  \n  .wrapper .shapes .column__3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n  \n  @media (max-width: 600px) {\n    .wrapper .shapes .column__3 {\n      margin-right: 10px;\n    }\n  }\n  \n  .wrapper .shapes .column__3 .six-circle {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: #2f2f2f;\n    /*box-shadow: 20px 0 0 $whiteColor,\n                          0 20px 0 $whiteColor,\n                          20px 20px 0 $yellowColor,\n                          0 40px 0 $blueColor,\n                          20px 40px 0 $whiteColor;*/\n    margin-top: 11px;\n    margin-right: 10px;\n    -webkit-animation: scaleCircle 2s ease alternate infinite;\n            animation: scaleCircle 2s ease alternate infinite;\n  }\n  \n  .wrapper .shapes .column__3 .pencil {\n    width: 25px;\n    height: 270px;\n    background: #4064bf;\n    box-shadow: 25px 0 0 #03a9f4;\n    position: relative;\n    margin-right: 10px;\n  }\n  \n  .wrapper .shapes .column__3 .pencil:before {\n    content: \"\";\n    position: absolute;\n    top: -20px;\n    left: 0;\n    width: 50px;\n    height: 0;\n    border-bottom: 20px solid #fffefe;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n  }\n  \n  .wrapper .shapes .column__3 .pencil:after {\n    content: \"\";\n    position: absolute;\n    top: -50px;\n    left: 10px;\n    width: 30px;\n    border-bottom: 30px solid #5486ff;\n    border-left: 15px solid transparent;\n    border-right: 14px solid transparent;\n  }\n  \n  .wrapper .form-content {\n    background: #f0f0f0;\n    border: 1px solid #f0f0f0;\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-around;\n    position: relative;\n    z-index: 2;\n  }\n  \n  .wrapper .form-content__header {\n    width: 290px;\n    text-align: center;\n  }\n  \n  .wrapper .form-content__header h2 {\n    font: 600 45px \"Nunito\", sans-serif;\n    color: #fa6161;\n    position: relative;\n  }\n  \n  .wrapper .form-content__header h2:before {\n    content: \"\";\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    background: #fa6161;\n    border-radius: 50%;\n    top: 14px;\n    left: 42px;\n    /*box-shadow: 15px 0 0 -2px $mainColor,\n                          30px 0 0 -2px $mainColor, \n                          0 12px 0 0px $mainColor, \n                          0 24px 0 0px $mainColor, \n                          15px 24px 0 0px $mainColor, \n                          30px 24px 0 -2px $mainColor, \n                          30px 12px 0 -2px $mainColor, \n                          15px 12px 0 -2px $mainColor;*/\n    -webkit-animation: sizeCircle 1.7s ease alternate infinite;\n            animation: sizeCircle 1.7s ease alternate infinite;\n  }\n  \n  .wrapper .form-content form {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .wrapper .form-content form .form-row {\n    margin-bottom: 15px;\n    text-align: center;\n    position: relative;\n    overflow: hidden;\n  }\n  \n  .wrapper .form-content form .form-row input {\n    width: 290px;\n    height: 30px;\n    border-radius: 5px;\n    outline: 0;\n    border: 0;\n    text-indent: 25px;\n    position: relative;\n  }\n  \n  .wrapper .form-content form .form-row input::-webkit-input-placeholder {\n    -webkit-transform: translateX(3%);\n            transform: translateX(3%);\n    letter-spacing: 1px;\n    font: 100 12px \"Poppins\", sans-serif;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row input:-ms-input-placeholder {\n    transform: translateX(3%);\n    letter-spacing: 1px;\n    font: 100 12px \"Poppins\", sans-serif;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row input::-ms-input-placeholder {\n    transform: translateX(3%);\n    letter-spacing: 1px;\n    font: 100 12px \"Poppins\", sans-serif;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row input::placeholder {\n    -webkit-transform: translateX(3%);\n            transform: translateX(3%);\n    letter-spacing: 1px;\n    font: 100 12px \"Poppins\", sans-serif;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row input:focus {\n    color: #fa6161;\n  }\n  \n  .wrapper .form-content form .form-row input:focus ~ .icon {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n  \n  .wrapper .form-content form .form-row label {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n  }\n  \n  .wrapper .form-content form .form-row .icon {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    padding: 7px;\n    background: transparent;\n    border-radius: 5px 0 0 5px;\n    color: #fa6161;\n    transition: all 0.5s ease-in-out;\n  }\n  \n  .wrapper .form-content form .form-row .btn {\n    width: 290px;\n    font: 100 15px \"Nunito\", sans-serif;\n    padding: 10px 20px;\n    border: 0;\n    outline: 0;\n    background: #fa6161;\n    color: #fffefe;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n  \n  .wrapper .form-content form .form-row .btn:hover {\n    background-color: rgba(250, 97, 97, 0.9);\n  }\n  \n  .wrapper .form-content form .form-row p {\n    font: 200 15px \"Poppins\", sans-serif;\n  }\n  \n  .wrapper .form-content form .form-row p a {\n    text-decoration: none;\n    color: rgba(250, 97, 97, 0.5);\n  }\n  \n  .wrapper .form-content form .form-row p a:hover {\n    color: #fa6161;\n  }\n  \n  .wrapper .form-content__footer {\n    text-align: center;\n  }\n  \n  .wrapper .form-content__footer p {\n    font: 200 15px \"Poppins\", sans-serif;\n  }\n  \n  .wrapper .form-content__footer p a {\n    text-decoration: none;\n    color: #fa6161;\n  }\n  \n  .wrapper .form-content__footer p a:hover {\n    color: rgba(250, 97, 97, 0.5);\n  }\n  \n  @-webkit-keyframes sizeCircle {\n    0% {\n      box-shadow: 15px 0 0 -2px #fa6161, 30px 0 0 -2px #fa6161, 0 12px 0 0px #fa6161, 0 24px 0 0px #fa6161, 15px 24px 0 0px #fa6161, 30px 24px 0 -2px #fa6161, 30px 12px 0 -2px #fa6161, 15px 12px 0 -2px #fa6161;\n    }\n    100% {\n      box-shadow: 15px 0 0 0 #fa6161, 30px 0 0 0 #fa6161, 0 12px 0 -2px #fa6161, 0 24px 0 -2px #fa6161, 15px 24px 0 -2px #fa6161, 30px 24px 0 0 #fa6161, 30px 12px 0 0 #fa6161, 15px 12px 0 0 #fa6161;\n    }\n  }\n  \n  @keyframes sizeCircle {\n    0% {\n      box-shadow: 15px 0 0 -2px #fa6161, 30px 0 0 -2px #fa6161, 0 12px 0 0px #fa6161, 0 24px 0 0px #fa6161, 15px 24px 0 0px #fa6161, 30px 24px 0 -2px #fa6161, 30px 12px 0 -2px #fa6161, 15px 12px 0 -2px #fa6161;\n    }\n    100% {\n      box-shadow: 15px 0 0 0 #fa6161, 30px 0 0 0 #fa6161, 0 12px 0 -2px #fa6161, 0 24px 0 -2px #fa6161, 15px 24px 0 -2px #fa6161, 30px 24px 0 0 #fa6161, 30px 12px 0 0 #fa6161, 15px 12px 0 0 #fa6161;\n    }\n  }\n  \n  @-webkit-keyframes scaleCircle {\n    from {\n      background: #2f2f2f;\n      box-shadow: 20px 0 0 #fffefe, 0 20px 0 #fffefe, 20px 20px 0 #fdcb03, 0 40px 0 #5486ff, 20px 40px 0 #fffefe;\n    }\n    to {\n      background: #fffefe;\n      box-shadow: 20px 0 0 #fdcb03, 0 20px 0 #5486ff, 20px 20px 0 #fffefe, 0 40px 0 #fdcb03, 20px 40px 0 #5486ff;\n    }\n  }\n  \n  @keyframes scaleCircle {\n    from {\n      background: #2f2f2f;\n      box-shadow: 20px 0 0 #fffefe, 0 20px 0 #fffefe, 20px 20px 0 #fdcb03, 0 40px 0 #5486ff, 20px 40px 0 #fffefe;\n    }\n    to {\n      background: #fffefe;\n      box-shadow: 20px 0 0 #fdcb03, 0 20px 0 #5486ff, 20px 20px 0 #fffefe, 0 40px 0 #fdcb03, 20px 40px 0 #5486ff;\n    }\n  }\n  \n  @-webkit-keyframes rotateCircle {\n    0% {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n  \n  @keyframes rotateCircle {\n    0% {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n  "

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"shapes\">\n      <div class=\"row\"></div>\n      <div class=\"column\">\n        <div class=\"column__1\">\n          <div class=\"polygen\"></div>\n          <div class=\"circle\"></div>\n          <div class=\"traingle\"></div>\n          <div class=\"italicline\"></div>\n          <div class=\"sm-circle\"></div>\n          <div class=\"xs-circle\"></div>\n        </div>\n        <div class=\"column__2\">\n          <div class=\"line\"></div>\n          <div class=\"square\"></div>\n          <div class=\"half-circle\"></div>\n          <div class=\"sm-square\"></div>\n          <div class=\"rectangle\"></div>\n          <div class=\"star\"></div>\n        </div>\n        <div class=\"column__3\">\n          <div class=\"six-circle\"></div>\n          <div class=\"pencil\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-content\">\n      <div class=\"form-content__header\">\n        <h2>BOOKAPP</h2>\n      </div>\n      <form  action=\"/signup\" method=\"POST\">\n        <div class=\"form-row\">\n            <input type=\"email\" name=\"email\" placeholder=\"E-MAIL\" required>\n        </div>\n        <div class=\"form-row\">\n            <input type=\"text\" name=\"username\" placeholder=\"USER NAME\" required>\n        </div>\n        <div class=\"form-row\">\n            <input type=\"text\" name=\"firstname\" placeholder=\"FIRST NAME\">\n        </div>\n        <div class=\"form-row\">\n            <input type=\"text\" name=\"lastname\" placeholder=\"LAST NAME\">\n        </div>\n        <div class=\"form-row\">\n            <input type=\"textarea\" name=\"about\" placeholder=\"ABOUT YOURSELF\">\n        </div>\n        <div class=\"form-row\">\n            <input type=\"text\" name=\"text\" placeholder=\"MOBILE NO\" required>\n        </div>\n        <div class=\"form-row\">\n            <input type=\" text\" name=\"college\" placeholder=\"COLLEGE\" required>\n        </div>\n        <div class=\"form-row\">\n            <input type=\" text\" name=\"address\" placeholder=\"ADDRESS\" required>\n        </div>\n        <div class=\"form-row\">\n          <input type=\"password\" name=\"password\" placeholder=\"Password\" required>\n        </div>\n        <div class=\"form-row\">\n          <button class=\"btn\" > Sign UP</button>\n        </div>\n        <div class=\"form-row\">\n          <p>Have an account ? <a [routerLink]=\"['/signin']\"  >Sign IN</a></p>\n        </div>\n      </form>\n      <div class=\"form-content__footer\">\n        <!-- <p><a href=\"#\">Forget passowrd !</a></p> -->\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(email, firstname, lastname, username, about, college, address, mobileno) {
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.about = about;
        this.college = college;
        this.address = address;
        this.mobileno = mobileno;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contain{\n    display: flex;\n    width: 700px;\n    margin: 20px;\n}\n\n.card-img-top{\n   width: 100%;\n   height: 250px;\n}\n\n.card{\n    margin: 10px 10px;\n}\n\nspan{\n    font-size: 20px;\n    font-weight: 700;\n}"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"contain\">\n<div *ngFor=\"let book of booksArray\">\n  <div class=\"card\" style=\"width: 18rem;\">\n    <img class=\"card-img-top\" src= {{book?.imageofitem}} alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <p class=\"card-title\"><span>BOOK NAME:</span>{{book?.bookname}}</p>\n      <p class=\"card-text\"><span>AUTHOR:</span>{{book?.authorname}}</p>\n      <p class=\"card-text\"><span>PRICE:</span>{{book?.price}}</p>\n      <p class=\"card-text\"><span>QUANTITY:</span>{{book?.quantity}}</p>\n      <p class=\"card-text\"><span>CONDITION:</span>{{book?.Condition}}</p>\n      <p class=\"card-text\"><span>SELLER ID:</span>{{book?.seller}}</p>\n      <!-- <button class=\"btn btn-primary btn-lg btn-block\" (click) = \"delete(book)\">DELETE WISH</button> -->\n    </div>\n  </div>\n</div>\n<h1 *ngIf=\"booksArray\"> WISHLIST IS EMPTY</h1>\n</div>"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _books_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../books-provider.service */ "./src/app/books-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(router, route, booksProviderService) {
        this.router = router;
        this.route = route;
        this.booksProviderService = booksProviderService;
        this.booksArray = [];
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksProviderService.getUser().subscribe(function (res) {
            _this.userId = res["id"];
            _this.booksProviderService.getWishlist(_this.userId).subscribe(function (res) {
                _this.wishlist = res;
                console.log(_this.wishlist);
                for (var i = 0; i < _this.wishlist.length; i++) {
                    _this.booksProviderService.getParticularBook(_this.wishlist[i].bookid).subscribe(function (res) {
                        console.log(res);
                        _this.booksArray.push(res);
                    });
                }
            });
        });
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _books_provider_service__WEBPACK_IMPORTED_MODULE_1__["BooksProviderService"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sarthak/finalProject/myapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map