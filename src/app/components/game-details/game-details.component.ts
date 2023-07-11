import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Game } from 'src/app/interfaces/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  game: Game;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        return this.gameService.getById(params['gameId'])
      }),
      tap(game => this.game = game[0])
    ).subscribe()
  }
}
