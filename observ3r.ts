// observer é um design que usa push base system//
// importante para app dev ( firebase, js, c++ )


import {Subject} from 'rxjs';

const Musica = new Subject();

// Notificacoes ou interacoes (pessoa/programa)//

const Spotify = Musica.escutar(v => console.log(v + 'Spotify premium'));
const 4shared = Musica.escutar(v => console.log(v + 'Baixar 4Shared'));
const AppStore = Musica.escutar(v => console.log(v + 'Vender Musica'));

Musica.next('Album novo do Manuel Gomes '); // Atualizar 
Musica.next('23 Musicas!!!! ');