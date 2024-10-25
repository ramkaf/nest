'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest_intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-9004053acf7d02c83a96618aa0465c045eeaa1094d5b1947f0b70153aa77bf99bae80ac082b2c5985cd4c8fdcc8e4aeb6f46d060b078af2d42bd070b90824a8f"' : 'data-bs-target="#xs-controllers-links-module-AppModule-9004053acf7d02c83a96618aa0465c045eeaa1094d5b1947f0b70153aa77bf99bae80ac082b2c5985cd4c8fdcc8e4aeb6f46d060b078af2d42bd070b90824a8f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-9004053acf7d02c83a96618aa0465c045eeaa1094d5b1947f0b70153aa77bf99bae80ac082b2c5985cd4c8fdcc8e4aeb6f46d060b078af2d42bd070b90824a8f"' :
                                            'id="xs-controllers-links-module-AppModule-9004053acf7d02c83a96618aa0465c045eeaa1094d5b1947f0b70153aa77bf99bae80ac082b2c5985cd4c8fdcc8e4aeb6f46d060b078af2d42bd070b90824a8f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-9004053acf7d02c83a96618aa0465c045eeaa1094d5b1947f0b70153aa77bf99bae80ac082b2c5985cd4c8fdcc8e4aeb6f46d060b078af2d42bd070b90824a8f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-9004053acf7d02c83a96618aa0465c045eeaa1094d5b1947f0b70153aa77bf99bae80ac082b2c5985cd4c8fdcc8e4aeb6f46d060b078af2d42bd070b90824a8f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9004053acf7d02c83a96618aa0465c045eeaa1094d5b1947f0b70153aa77bf99bae80ac082b2c5985cd4c8fdcc8e4aeb6f46d060b078af2d42bd070b90824a8f"' :
                                        'id="xs-injectables-links-module-AppModule-9004053acf7d02c83a96618aa0465c045eeaa1094d5b1947f0b70153aa77bf99bae80ac082b2c5985cd4c8fdcc8e4aeb6f46d060b078af2d42bd070b90824a8f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-fea9a050d834be0066d629b83d5b9a2fdbcd0429148d075f58d5817644a469dabc1e3fa57add2c56c0d14d2f94907f347f9daa00f89f61c5e301bb35e7fc3b3a"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-fea9a050d834be0066d629b83d5b9a2fdbcd0429148d075f58d5817644a469dabc1e3fa57add2c56c0d14d2f94907f347f9daa00f89f61c5e301bb35e7fc3b3a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-fea9a050d834be0066d629b83d5b9a2fdbcd0429148d075f58d5817644a469dabc1e3fa57add2c56c0d14d2f94907f347f9daa00f89f61c5e301bb35e7fc3b3a"' :
                                            'id="xs-controllers-links-module-AuthModule-fea9a050d834be0066d629b83d5b9a2fdbcd0429148d075f58d5817644a469dabc1e3fa57add2c56c0d14d2f94907f347f9daa00f89f61c5e301bb35e7fc3b3a"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-fea9a050d834be0066d629b83d5b9a2fdbcd0429148d075f58d5817644a469dabc1e3fa57add2c56c0d14d2f94907f347f9daa00f89f61c5e301bb35e7fc3b3a"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-fea9a050d834be0066d629b83d5b9a2fdbcd0429148d075f58d5817644a469dabc1e3fa57add2c56c0d14d2f94907f347f9daa00f89f61c5e301bb35e7fc3b3a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-fea9a050d834be0066d629b83d5b9a2fdbcd0429148d075f58d5817644a469dabc1e3fa57add2c56c0d14d2f94907f347f9daa00f89f61c5e301bb35e7fc3b3a"' :
                                        'id="xs-injectables-links-module-AuthModule-fea9a050d834be0066d629b83d5b9a2fdbcd0429148d075f58d5817644a469dabc1e3fa57add2c56c0d14d2f94907f347f9daa00f89f61c5e301bb35e7fc3b3a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-3529b7bc0665d05d21d9ce19b3916f1dc6e596efcf157e8ead42c6874370f1b313f609f1559c39b7a68cbea985a3e9cd442c9b0003b7a1e47e07158d78015553"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-3529b7bc0665d05d21d9ce19b3916f1dc6e596efcf157e8ead42c6874370f1b313f609f1559c39b7a68cbea985a3e9cd442c9b0003b7a1e47e07158d78015553"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-3529b7bc0665d05d21d9ce19b3916f1dc6e596efcf157e8ead42c6874370f1b313f609f1559c39b7a68cbea985a3e9cd442c9b0003b7a1e47e07158d78015553"' :
                                            'id="xs-controllers-links-module-PostsModule-3529b7bc0665d05d21d9ce19b3916f1dc6e596efcf157e8ead42c6874370f1b313f609f1559c39b7a68cbea985a3e9cd442c9b0003b7a1e47e07158d78015553"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-3529b7bc0665d05d21d9ce19b3916f1dc6e596efcf157e8ead42c6874370f1b313f609f1559c39b7a68cbea985a3e9cd442c9b0003b7a1e47e07158d78015553"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-3529b7bc0665d05d21d9ce19b3916f1dc6e596efcf157e8ead42c6874370f1b313f609f1559c39b7a68cbea985a3e9cd442c9b0003b7a1e47e07158d78015553"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-3529b7bc0665d05d21d9ce19b3916f1dc6e596efcf157e8ead42c6874370f1b313f609f1559c39b7a68cbea985a3e9cd442c9b0003b7a1e47e07158d78015553"' :
                                        'id="xs-injectables-links-module-PostsModule-3529b7bc0665d05d21d9ce19b3916f1dc6e596efcf157e8ead42c6874370f1b313f609f1559c39b7a68cbea985a3e9cd442c9b0003b7a1e47e07158d78015553"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-dd834c9c1492989ff779da9b3126168d094708ed5ed87364bce67def7fac3603c70e1ba51c7124a553b28a52da441e8e5ae49d51a48d1cd76a01bdc8934f6cca"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-dd834c9c1492989ff779da9b3126168d094708ed5ed87364bce67def7fac3603c70e1ba51c7124a553b28a52da441e8e5ae49d51a48d1cd76a01bdc8934f6cca"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-dd834c9c1492989ff779da9b3126168d094708ed5ed87364bce67def7fac3603c70e1ba51c7124a553b28a52da441e8e5ae49d51a48d1cd76a01bdc8934f6cca"' :
                                            'id="xs-controllers-links-module-UsersModule-dd834c9c1492989ff779da9b3126168d094708ed5ed87364bce67def7fac3603c70e1ba51c7124a553b28a52da441e8e5ae49d51a48d1cd76a01bdc8934f6cca"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-dd834c9c1492989ff779da9b3126168d094708ed5ed87364bce67def7fac3603c70e1ba51c7124a553b28a52da441e8e5ae49d51a48d1cd76a01bdc8934f6cca"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-dd834c9c1492989ff779da9b3126168d094708ed5ed87364bce67def7fac3603c70e1ba51c7124a553b28a52da441e8e5ae49d51a48d1cd76a01bdc8934f6cca"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-dd834c9c1492989ff779da9b3126168d094708ed5ed87364bce67def7fac3603c70e1ba51c7124a553b28a52da441e8e5ae49d51a48d1cd76a01bdc8934f6cca"' :
                                        'id="xs-injectables-links-module-UsersModule-dd834c9c1492989ff779da9b3126168d094708ed5ed87364bce67def7fac3603c70e1ba51c7124a553b28a52da441e8e5ae49d51a48d1cd76a01bdc8934f6cca"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionDto.html" data-type="entity-link" >CreatePostMetaOptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersDto.html" data-type="entity-link" >GetUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});