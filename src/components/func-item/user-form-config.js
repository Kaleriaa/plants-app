export const getUserFields = ({ nursery }) => [
    {
        name: 'name', title: 'ФИО'
    },
    {
        name: 'post', title: 'Должность'
    },
    {
        name: 'sex', type: 'select', title: 'Пол', catalogName: 'Выберите пол',
        catalog: [{ id: 1, name: 'Мужчина' }, { id: 0, name: 'Женщина' }]
    },
    {
        name: 'experience', title: 'Стаж работы', type: 'number'
    },
    {
        name: 'age', title: 'Возраст', type: 'number'
    },
    {
        name: '', catalog: nursery, catalogName: 'Выберите питомник', title: 'Место работы'
    }
]