import { CdkTreeModule, FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, inject } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { filter, first, tap } from 'rxjs';
import { menu } from './menu';
import { MenuNode } from './menu-node.type';

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [CdkTreeModule, RouterLink, RouterLinkActive],
  template: `
    <cdk-tree [dataSource]="menu" [treeControl]="menuControl">
      <cdk-tree-node
        *cdkTreeNodeDef="let node"
        [style.display]="shouldDisplay(node) ? 'block' : 'none'"
      >
        @if(node.type === 'menu-label') {
        <button (click)="node.isExpanded = !node.isExpanded">
          {{ node.text }}
        </button>
        } @else if(node.type === 'menu-link') {
        <a [routerLink]="node.path">
          {{ node.text }}
        </a>
        }
      </cdk-tree-node>
    </cdk-tree>
  `,
})
export class MenuComponent implements OnInit {
  #router = inject(Router);

  protected menu = menu;
  protected menuControl = new FlatTreeControl<MenuNode>(
    (node) => node.level,
    (node) => node.type === 'menu-label' && node.isExpandable
  );

  findParentNode(currentNode: MenuNode): MenuNode | null {
    const nodeIndex = this.menu.indexOf(currentNode);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      const previousNode = this.menu[i];

      if (previousNode.level === currentNode.level - 1) {
        return previousNode;
      }
    }

    return null;
  }

  shouldDisplay(node: MenuNode) {
    let parent = this.findParentNode(node);
    while (parent) {
      if (parent.type === 'menu-link' || !parent.isExpanded) {
        return false;
      }
      parent = this.findParentNode(parent);
    }
    return true;
  }

  ngOnInit(): void {
    this.#router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        tap((navigationEnd) => {
          const currentPath = navigationEnd.urlAfterRedirects;

          const menuNode = this.menu.find(
            (node) => node.type === 'menu-link' && node.path === currentPath
          );

          if (!menuNode) return;

          let menuNodeParent = this.findParentNode(menuNode);
          while (menuNodeParent) {
            menuNodeParent.type === 'menu-label' && menuNodeParent.isExpandable
              ? (menuNodeParent.isExpanded = true)
              : {};

            if (menuNodeParent.level === 0) return;

            menuNodeParent = this.findParentNode(menuNodeParent);
          }
        }),
        first()
      )
      .subscribe();
  }
}
