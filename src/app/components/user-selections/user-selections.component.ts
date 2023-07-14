import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListType } from 'src/app/enums/list-type';
import { Game } from 'src/app/interfaces/game';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-user-selections',
  templateUrl: './user-selections.component.html',
  styleUrls: ['./user-selections.component.scss']
})
export class UserSelectionsComponent implements OnInit {
  listType: ListType;
  listTypeTitle: string;
  ownedGames: Game[];
  wishListGames: Game[];
  
  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.listType = this.route.snapshot.routeConfig.path === 'owned' ? ListType.OWNEDLIST : ListType.WISHLIST;
    this.listTypeTitle = this.listType === ListType.OWNEDLIST ? 'Owned Games' : 'Wishlist Games';
  }

}
