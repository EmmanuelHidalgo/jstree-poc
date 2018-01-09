var mock = [
    {
        'text' : 'Science',
        'path': '#',
        'children' : [
          { 'text' : 'Astrology',
            'children':[{'text':'planets',
                        'children': [
                            {'text': 'earth'},
                            {'text': 'saturn'},
                            {'text': 'pluton'}
                        ]}]
          },
          'Medicine'
        ]
     },
   'Technology',
   'Games',
   {
     'text' : 'Music',
     'children' : [
       { 'text' : 'Alternative' },
       {
           'text': 'rock',
           'children': ['metal', 'deathmetal','grunge']
       }
     ]
  }
];

  export default mock;