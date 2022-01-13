export {}
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
type MyLength<T extends readonly any[]> =  T['length']

type teslaLength = MyLength<tesla>  // expected 4
type spaceXLength = MyLength<spaceX> // expected 5