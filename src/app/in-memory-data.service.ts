import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let planets = [
      { id: 10, name: 'Erabor', imageUrl: '', description: 'A world in the Remian sector, researching the implementation of biological features of creatures'},
	  { id: 11, name: 'New Delphi', imageUrl: '', description: '' },
	  { id: 12, name: 'Eremar', imageUrl: '', description: 'The de facto captial of the Greymarche sector' },
	  { id: 13, name: 'Kyoto', imageUrl: '', description: '' },
	  { id: 14, name: 'Terra', imageUrl: '', description: '' },
	  { id: 15, name: 'Reitha', imageUrl: '', description: '' },
	  { id: 16, name: 'Sigma Externus', imageUrl: '', description: 'The largest outer world, at least in documented residents. A bustling hive of villainy.'},
	  { id: 17, name: 'Laneth', imageUrl: '', description: 'A prominent research world. Many research stations are scattered on the surface.' },
	  { id: 18, name: 'Drogos', imageUrl: '', description: '' },
	  { id: 19, name: 'Mustafar', imageUrl: 'http://vignette2.wikia.nocookie.net/starwars/images/a/af/Mustafar_DB.png/revision/latest?cb=20160118061913', description: '' },
	  { id: 20, name: 'Telith', imageUrl: '', description: '' }
    ];
    return {planets};
  }
}