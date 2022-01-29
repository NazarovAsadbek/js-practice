import './lib/lib'

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});
$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});
$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal i title',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ipsasimilique Animi blanditiis dicta dolore esse harum'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Console log',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    console.log('test another btn')
                }
            ]
        ]
    }
}));
