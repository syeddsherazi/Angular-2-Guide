import {containsTree} from '@angular/router/src/url_tree';
import {Router} from '@angular/router';

export function isRouteActive(router: Router, route: string) {
    const currentUrlTree = router.parseUrl(router.url);
    const routeUrlTree = router.createUrlTree([route]);
    return containsTree(currentUrlTree, routeUrlTree, true);
}