export const getFields = ({ users, sorts }) => [
    {
        name: 'name', title: 'Название'
    },
    {
        name: 'sortId', title: 'Сорт', catalogName: 'Выберите сорт', catalog: sorts, type: 'select'
    },
    {
        title: 'Дата посадки', type: 'date', name: 'dateGrown'
    },
    {
        name: 'dateWatering', type: 'data', title: 'Дата полива'
    },
    {
        name: 'height', title: 'Высота', type: 'number'
    },
    {
        name: 'state', title: 'Состояние'
    },
    {
        title: 'Ответственный', type: 'select', catalog: users, catalogName: 'Выберите сотрудника'
    }
]
