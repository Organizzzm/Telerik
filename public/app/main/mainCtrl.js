App.controller('mainCtrl', function($scope){
    $scope.courses = [
        {title: 'C# for Sociopaths', featured: true, published: new Date('10/5/2013')},
        {title: 'C# for Non-Sociopaths', featured: true, published: new Date('10/12/2013')},
        {title: 'Super Duper Expert C#', featured: false, published: new Date('10/1/2013')},
        {title: 'Visual Basic for Visual Basic Developers', featured: false, published: new Date('7/12/2013')},
        {title: 'Pedantic C++', featured: true, published: new Date('1/1/2013')},
        {title: 'JavaScript for People over 20', featured: true, published: new Date('10/13/2013')},
        {title: 'Maintainable Code for Cowards', featured: true, published: new Date('3/1/2013')},
        {title: 'A Survival Guide to Code Reviews', featured: true, published: new Date('2/1/2013')},
        {title: 'How to Job Hunt Without Alerting your Boss', featured: true, published: new Date('10/7/2013')},
        {title: 'How to Keep your Soul and go into Management', featured: false, published: new Date('8/1/2013')},
        {title: 'Telling Recruiters to Leave You Alone', featured: false, published: new Date('11/1/2013')},
        {title: "Writing Code that Doesn't Suck", featured: true, published: new Date('10/13/2013')},
        {title: 'Code Reviews for Jerks', featured: false, published: new Date('10/1/2013')},
        {title: 'How to Deal with Narcissistic Coworkers', featured: true, published: new Date('2/15/2013')},
        {title: 'Death March Coding for Fun and Profit', featured: true, published: new Date('7/1/2013')}
    ];
});