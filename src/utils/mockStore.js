export const mockStore = {
    auth: {
        loggingIn: false,
        loggedIn: true,
        user: {
            _id: '5c643ebfe0a0aa4ca8efd0e2',
            email: 'kiro_bora@yahoo.com',
            firstName: 'kiro',
            lastName: 'bora',
            initials: 'kb',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzY0M2ViZmUwYTBhYTRjYThlZmQwZTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTUyOTk3ODkyLCJleHAiOjE1NTMwODQyOTJ9.Zp0F_UK8y9Jr48rp6aUPvgIjFNsHOLVmY9t_XUdSymY'
        },
        loginError: ''
    },
    project: {
        projects:  [
            {
                createdAt: '2019-03-05T19:59:07.156Z',
                _id: '5c7ed57413f8e60017102a23',
                title: 'proj title 2',
                content: 'test project text',
                authorFirstName: 'kiro',
                authorLastName: 'bora',
                authorId: '5c643ebfe0a0aa4ca8efd0e2',
                __v: 0
            },
            {
                createdAt: '2019-03-05T19:59:07.156Z',
                _id: '5c7ed57a13f8e60017102a24',
                title: 'proj title',
                content: 'test project text 2',
                authorFirstName: 'kiro',
                authorLastName: 'bora',
                authorId: '5c643ebfe0a0aa4ca8efd0e2',
                __v: 0
            }
        ],
        isProjectCreated: false,
        isProjectSaved: false
    }
};
