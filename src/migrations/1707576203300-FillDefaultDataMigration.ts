import { MigrationInterface, QueryRunner } from 'typeorm';

export class FillDefaultDataMigration1707576203300 implements MigrationInterface {
    name = 'FillDefaultDataMigration1707576203300';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "image_url", "username", "password", "system_role") 
                                       VALUES('52db0d5e-c193-4bfb-ae89-e90c44651c56', now(), now(), null, 'Тетяна', 'Лисенко', '1978-08-08', 'tetyanalysenko@gmail.com', '+380951234567', 'https://drive.google.com/thumbnail?id=1njVWh1FyJQEfXfd4kr2UOWAwMMFEEmlJ', 'tanyaL', '$2b$12$WZaQeYB3jw90OZ3N.Yve2O.z/yDd1ovuJcIyHoyOxThj27zCV/rnG', 'Тренер');`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "patronymic", "date_of_birth", "email", "phone", "image_url", "username", "password", "system_role") 
                                       VALUES('adac1111-3dc1-4a8b-9361-5a778d01a9af', now(), now(), null, 'Маргарита', 'Ерстенюк', 'Олександрівна', '2003-05-20', 'margoerstenyk@gmail.com', '+380686302468', 'https://drive.google.com/thumbnail?id=1mMXE3hC_gVX0sWY0DxXHQBrXRS23yVNM', 'margo', '$2b$12$GrSt75pmLfy3BLfUN0RMTujjEJZXLe9yC9dZce2c6w8eMQunzp/U2', 'Адміністратор');`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "image_url", "username", "password", "system_role") 
                                       VALUES('3a6d458d-7d79-4be7-9ef6-2b56af1a843b', now(), now(), null, 'Василь', 'Петренко', '1990-12-15', 'vasyapetrenko@gmail.com', '+380991234567', 'https://drive.google.com/thumbnail?id=10vqKsCZiHde7Gkm91EIcrN1cfVyn1JM5', 'vasya', '$2b$12$Pvp8w7nWuM6/OFrqzGvO7.Q1wOuqKEEoZLnzvoDNNTnKhwXxD.mY6', 'Тренер');`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "image_url", "username", "password", "system_role") 
                                       VALUES('f8e4c712-0a95-4e9c-8ef2-4e1b8722c3e2', now(), now(), null, 'Оксана', 'Мельник', '1985-07-25', 'oksana.melnyk@gmail.com', '+380686302468', '', 'oksana', '$2b$12$FCH1XqexfwwSWsZM9C5Vg.j6s65WoyR6Yr3MPZ1omMP6T0Gz9Teje', 'Тренер');`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "image_url", "username", "password", "system_role") 
                                       VALUES('c4415b18-b4e6-4780-bf92-89e7b8fc0c78', now(), now(), null, 'Іван', 'Ситник', '1997-03-10', 'ivansutnyk@gmail.com', '+380977654321', 'https://drive.google.com/thumbnail?id=1095Zq6i-_TZm2b3V2LADI56rbqO-NQuJ', 'ivan', '$2b$12$u/mB1OnZjxxEgpkbptBcGugjzLX.vMD8CDmOsD6d7QpOY/JEvk8m6', 'Тренер');`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "system_role") 
                                       VALUES('10f8572b-8ecf-4d5a-af79-90a300319a8f', now(), now(), null, 'Олексій', 'Ковальчук', '1995-11-30', 'oleksii.kovalchuk@gmail.com', '+380505050505', 'oleksii', '$2b$12$tZqN7hNBv1opQ4Lbs1YPwOMXW1aLYJ5adRZDvCzzWwMz/uI7iqj1q', 'Тренер');`);

        await queryRunner.query(`INSERT INTO public.coaches (id, created_at, updated_at, deleted_at, "user_id", "activities", "education", "rewards", "motto") 
                                       VALUES('cf0d6d0e-354f-45ee-956f-045fc3a039c3', now(), now(), null, '52db0d5e-c193-4bfb-ae89-e90c44651c56', 'Дитячий фітнес, Аеробіка', 'Бердянський державний педагогічний університет.', 'Майстер спорту України зі спортивної аеробіки.', 'Працюйте над собою сьогодні, щоб бути кращим завтра.');`);
        await queryRunner.query(`INSERT INTO public.coaches (id, created_at, updated_at, deleted_at, "user_id", "activities", "education", "rewards", "motto") 
                                       VALUES('30d4eeb9-8c38-4ac2-8884-b1ffffa0928b', now(), now(), null, 'adac1111-3dc1-4a8b-9361-5a778d01a9af', 'Акробатика, Гімнастика', 'Черкаський національний університет імені Богдана Хмельницького', 'Майстер спорту України зі спортивної гімнастики.', 'Біль, який ви відчуваєте сьогодні, стане силою, яку ви відчуєте завтра.');`);
        await queryRunner.query(`INSERT INTO public.coaches (id, created_at, updated_at, deleted_at, "user_id", "activities", "education", "rewards", "motto") 
                                       VALUES('0ef5e3c2-2bab-4c6f-821c-c2435ba2de03', now(), now(), null, '3a6d458d-7d79-4be7-9ef6-2b56af1a843b', 'Акробатика', 'Львівський національний університет фізичної культури.', '', 'Віра у себе - ключ до успіху.');`);
        await queryRunner.query(`INSERT INTO public.coaches (id, created_at, updated_at, deleted_at, "user_id", "activities", "education", "rewards", "motto") 
                                       VALUES('1b2c195b-dd40-4e13-b996-d40cabe3d15a', now(), now(), null, 'f8e4c712-0a95-4e9c-8ef2-4e1b8722c3e2', 'Пілатес, Фітнес', 'Одеський національний університет імені І.І. Мечникова.', 'Кандидат у майстри спорту з легкої атлетики', 'Прагнення до досягнень створює безмежні можливості.');`);
        await queryRunner.query(`INSERT INTO public.coaches (id, created_at, updated_at, deleted_at, "user_id", "activities", "education", "rewards", "motto") 
                                       VALUES('0bddf48e-85ea-42c3-92cd-821c5236ea5b', now(), now(), null, 'c4415b18-b4e6-4780-bf92-89e7b8fc0c78', 'Акробатика, Гімнастика', 'Харківський національний університет імені В.Н. Каразіна.', '', 'Людина може досягти всього, що здатна осягнути і прийняти розумом.');`);
        await queryRunner.query(`INSERT INTO public.coaches (id, created_at, updated_at, deleted_at, "user_id", "activities", "education", "rewards", "motto") 
                                       VALUES('ff311e1d-bd3c-4d4b-9d85-dfc3f3eed8ac', now(), now(), null, '10f8572b-8ecf-4d5a-af79-90a300319a8f', 'Єдиноборства, Бойові програми', 'Київський національний університет імені Тараса Шевченка.', 'Багаторазовий чемпіон України та призер Європи з рукопашного бою', 'Практика приводить до досконалості');`);

        await queryRunner.query(`INSERT INTO public.groups (id, created_at, updated_at, deleted_at, "title", "description", "color", "coach_id") 
                                       VALUES('c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', now(), now(), null, 'АК-01', 'Пн/Ср/Пт 17:00-18:30', '#bfcfff', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public.groups (id, created_at, updated_at, deleted_at, "title", "description", "color", "coach_id") 
                                       VALUES('8a02bd73-d34e-4f7d-a26a-deb98565b6fd', now(), now(), null, 'АК-02', 'Пн/Ср/Пт 18:30-19:30', '#87eb98', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public.groups (id, created_at, updated_at, deleted_at, "title", "description", "color", "coach_id") 
                                       VALUES('7378f992-c91e-48b7-98bc-1d84bf26affd', now(), now(), null, 'ФІ-03', 'Вт/Чт/Сб 9:00-10:00', '#dafcab', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);

        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "image_url", "system_role", "fit_cent_amount") 
                                       VALUES('962ff543-51ae-4379-bd2b-639b90f93409', now(), now(), null, 'Антон', 'Мазур', '1992-12-02', 'anton.m@gmail.com', '+380936172490', 'anton_m', '$2b$12$GrSt75pmLfy3BLfUN0RMTujjEJZXLe9yC9dZce2c6w8eMQunzp/U2', 'https://drive.google.com/thumbnail?id=1b16EXSIF13ZYxPSOAt6kXiVABaeSEY4X', 'Атлет', 50);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "image_url", "system_role", "fit_cent_amount") 
                                       VALUES('9afbf696-2428-448e-8cb8-8d953d01afe5', now(), now(), null, 'Галина', 'Шевченко', '1998-01-25', 'shevchenko_h@gmail.com', '+380934145347', 'halyna_shevchenko', '$2b$12$GrSt75pmLfy3BLfUN0RMTujjEJZXLe9yC9dZce2c6w8eMQunzp/U2', 'https://drive.google.com/thumbnail?id=1__0GtJU1E-4gyleOstJ1aq-T5JVXwRCW', 'Атлет', 150);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "image_url", "system_role", "fit_cent_amount") 
                                       VALUES('6d2bb96b-77c3-48b3-afc1-e1cdf289ed4b', now(), now(), null, 'Надія', 'Гончар', '1997-03-17', 'honchar@gmail.com', '+380934457453', 'nadiya_1', '$2b$12$GrSt75pmLfy3BLfUN0RMTujjEJZXLe9yC9dZce2c6w8eMQunzp/U2', 'https://drive.google.com/thumbnail?id=1buZlk694cR9My-AdclkdjTMxKxjag9jQ', 'Атлет', 0);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "image_url", "system_role", "fit_cent_amount") 
                                       VALUES('418e9f3a-6679-4190-925c-e2970ee37e01', now(), now(), null, 'Олег', 'Павленко', '1989-04-21', 'pavlenko_oleg@gmail.com','+380739548457', 'pavlenko', '$2b$12$GrSt75pmLfy3BLfUN0RMTujjEJZXLe9yC9dZce2c6w8eMQunzp/U2', 'https://drive.google.com/thumbnail?id=12rQK4AGhrpQoH_SRxMGk6-CcYbVoQ77Q', 'Атлет', 175);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "image_url", "system_role", "fit_cent_amount") 
                                       VALUES('deb3ccea-9612-4d1d-a420-39dbf4a9e0bd', now(), now(), null, 'Іванна', 'Усенко', '2001-11-08', 'usenko@gmail.com', '+380736376433', 'ivanna', '$2b$12$GrSt75pmLfy3BLfUN0RMTujjEJZXLe9yC9dZce2c6w8eMQunzp/U2', 'https://drive.google.com/thumbnail?id=1pd7h9YPX2-0a0EnxUsJilY4geWX3rPXN', 'Атлет', 300);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "image_url", "system_role", "fit_cent_amount") 
                                       VALUES('8d82e994-034a-4bab-a786-746c0815358e', now(), now(), null, 'Алла', 'Фоменко', '2000-09-26', 'fomenko@gmail.com', '+380914810995', 'alla.fomenko', '$2b$12$GrSt75pmLfy3BLfUN0RMTujjEJZXLe9yC9dZce2c6w8eMQunzp/U2', 'https://drive.google.com/thumbnail?id=1wFC08i6eKS3E-zCz6Ad11CZsWja1m-LN', 'Атлет', 100);`);

        await queryRunner.query(`INSERT INTO public.athletes (id, created_at, updated_at, deleted_at, "user_id") 
                                       VALUES('5289cf9e-e4cf-479c-a17b-15ac019579a5', now(), now(), null, '962ff543-51ae-4379-bd2b-639b90f93409');`);
        await queryRunner.query(`INSERT INTO public.athletes (id, created_at, updated_at, deleted_at, "user_id") 
                                       VALUES('86067fb3-81cf-4765-b527-8b72ba2798e5', now(), now(), null, '9afbf696-2428-448e-8cb8-8d953d01afe5');`);
        await queryRunner.query(`INSERT INTO public.athletes (id, created_at, updated_at, deleted_at, "user_id") 
                                       VALUES('6edc4cec-d48a-4ee3-a1ee-dcb780eb89a8', now(), now(), null, '6d2bb96b-77c3-48b3-afc1-e1cdf289ed4b');`);
        await queryRunner.query(`INSERT INTO public.athletes (id, created_at, updated_at, deleted_at, "user_id") 
                                       VALUES('3cee354f-7995-4bf1-a0b0-ece494fcdae3', now(), now(), null, '418e9f3a-6679-4190-925c-e2970ee37e01');`);
        await queryRunner.query(`INSERT INTO public.athletes (id, created_at, updated_at, deleted_at, "user_id") 
                                       VALUES('6109d551-567b-4a15-b39e-a19fdad047f3', now(), now(), null, 'deb3ccea-9612-4d1d-a420-39dbf4a9e0bd');`);
        await queryRunner.query(`INSERT INTO public.athletes (id, created_at, updated_at, deleted_at, "user_id") 
                                       VALUES('d2c83ef4-6ee4-41fa-945c-8c655223ee2d', now(), now(), null, '8d82e994-034a-4bab-a786-746c0815358e');`);

        await queryRunner.query(`INSERT INTO public."athletes-groups" (id, created_at, updated_at, deleted_at, "athlete_id", "group_id") 
                                       VALUES('824ddcb6-a27f-4f48-a44a-46cdc9e00a91', now(), now(), null, '5289cf9e-e4cf-479c-a17b-15ac019579a5', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b');`);
        await queryRunner.query(`INSERT INTO public."athletes-groups" (id, created_at, updated_at, deleted_at, "athlete_id", "group_id") 
                                       VALUES('e9599d1b-475f-4323-99bd-9e44acb324a9', now(), now(), null, '86067fb3-81cf-4765-b527-8b72ba2798e5', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd');`);
        await queryRunner.query(`INSERT INTO public."athletes-groups" (id, created_at, updated_at, deleted_at, "athlete_id", "group_id") 
                                       VALUES('a9d4a6c0-9780-4ae3-89f7-44bd3289eb1f', now(), now(), null, '6edc4cec-d48a-4ee3-a1ee-dcb780eb89a8', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd');`);
        await queryRunner.query(`INSERT INTO public."athletes-groups" (id, created_at, updated_at, deleted_at, "athlete_id", "group_id") 
                                       VALUES('af89f2f2-facf-4c4d-9cfd-de869f1e1bd8', now(), now(), null, '3cee354f-7995-4bf1-a0b0-ece494fcdae3', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b');`);
        await queryRunner.query(`INSERT INTO public."athletes-groups" (id, created_at, updated_at, deleted_at, "athlete_id", "group_id") 
                                       VALUES('3e6574fd-75b7-4c07-846e-81b6fe69ebe2', now(), now(), null, '6109d551-567b-4a15-b39e-a19fdad047f3', '7378f992-c91e-48b7-98bc-1d84bf26affd');`);
        await queryRunner.query(`INSERT INTO public."athletes-groups" (id, created_at, updated_at, deleted_at, "athlete_id", "group_id") 
                                       VALUES('501b6e82-7d96-4d6a-80dc-cce6003a689f', now(), now(), null, 'd2c83ef4-6ee4-41fa-945c-8c655223ee2d', '7378f992-c91e-48b7-98bc-1d84bf26affd');`);

        await queryRunner.query(`INSERT INTO public."fit-products" (id, created_at, updated_at, deleted_at, "title", "description", "category", "image_url", "availability", "quantity", "cost") 
                                       VALUES('99f84b91-402d-407b-a484-b4659835702b', now(), now(), null, 'Спортивна водостійка сумка',
                                        'Компактна та зручна сумка для зберігання спортивного спорядження та аксесуарів. Виготовлена з водонепроникного матеріалу з міцними швами.', 
                                        'Аксесуари', 'https://drive.google.com/thumbnail?id=1k1iAadQxNZgFGO4ZGvVGtEqOdZOeb_jT', 'В наявності', 5, 250);`);
        await queryRunner.query(`INSERT INTO public."fit-products" (id, created_at, updated_at, deleted_at, "title", "description", "category", "image_url", "availability", "quantity", "cost") 
                                       VALUES('e25b223f-fc82-4290-8a07-70bb44c3d43a', now(), now(), null, 'Килимок для фітнесу',
                                        'Килимок призначений для занять фітнесом та іншими видами спорту. Виготовлений зі спеціального пінополіетилену, який не пропускає холод і тепло, не вбирає вологу.', 
                                        'Аксесуари', 'https://drive.google.com/thumbnail?id=1Yxzl0T0HZ7Z2AsoD-SF9sz3mONm3zwq6', 'В наявності', 12, 200);`);
        await queryRunner.query(`INSERT INTO public."fit-products" (id, created_at, updated_at, deleted_at, "title", "description", "category", "image_url", "availability", "quantity", "cost") 
                                       VALUES('abf27a79-078e-4e3f-91b9-5722408db3d4', now(), now(), null, 'Пляшка для води',
                                        'Міцна, екологічна та легка пляшка, яка чудово підходить для поїздок, прогулянок або занять спортом.', 
                                        'Аксесуари', 'https://drive.google.com/thumbnail?id=1qxNswuBzDuUNKVk7CJiOPosYnQ4RqjAT', 'В наявності', 7, 200);`);
        await queryRunner.query(`INSERT INTO public."fit-products" (id, created_at, updated_at, deleted_at, "title", "description", "category", "image_url", "availability", "quantity", "cost") 
                                       VALUES('6a7305b3-98cc-4e01-877b-d3ff29e1e25b', now(), now(), null, 'Спортивна кепка',
                                        'Розмір кепки можна регулювати позаду за допомогою застібки.', 
                                        'Аксесуари', 'https://drive.google.com/thumbnail?id=1OGeKYwBeuwJgVI-F3QLx6fCgitrjwyrc', 'Товар відсутній', 0, 150);`);
        await queryRunner.query(`INSERT INTO public."fit-products" (id, created_at, updated_at, deleted_at, "title", "description", "category", "image_url", "availability", "quantity", "cost") 
                                       VALUES('d6e4d61d-eb5a-427e-8344-330ebae178dd', now(), now(), null, 'Спортивна жіноча футболка',
                                        'Легка, дихаюча та стильна - ідеальний вибір для тренувань.', 
                                        'Одяг', 'https://drive.google.com/thumbnail?id=1kct6DIL25EgWXkdfBFYoKWZGeERAzM76', 'В наявності', 2, 235);`);
        await queryRunner.query(`INSERT INTO public."fit-products" (id, created_at, updated_at, deleted_at, "title", "description", "category", "image_url", "availability", "quantity", "cost") 
                                       VALUES('1006c4cd-be69-414b-8015-168fbccf7a23', now(), now(), null, 'Обтяжувачі для ніг 1кг',
                                        'Якщо ви хочете збільшити навантаження під час тренувань, але при цьому не перестаратися, спробуйте обважнювачі з регульованою вагою. Завдяки манжетам на липучці, обважнювачі міцно й комфортно кріпляться на зап''ясті або щиколотці, забезпечуючи додаткове навантаження.', 
                                        'Інше', 'https://drive.google.com/thumbnail?id=1fWd_r_ktiPMByqsRHZAwpw68AvfByPhY', 'Незабаром з''явиться', 14, 175);`);

        await queryRunner.query(`INSERT INTO public."gym-subscriptions" (id, created_at, updated_at, deleted_at, "title", "description", "activity_type", "available_trainings") 
                                       VALUES('975ac6c8-5ac7-401e-bdd3-6080f8a0047b', now(), now(), null, 'Аматорський', '', 'Фітнес', 4);`);
        await queryRunner.query(`INSERT INTO public."gym-subscriptions" (id, created_at, updated_at, deleted_at, "title", "description", "activity_type", "available_trainings") 
                                       VALUES('c8afe065-c2f0-4e92-9251-87cbc932a7ed', now(), now(), null, 'Класичний ', '', 'Фітнес', 8);`);
        await queryRunner.query(`INSERT INTO public."gym-subscriptions" (id, created_at, updated_at, deleted_at, "title", "description", "activity_type", "available_trainings") 
                                       VALUES('d7e67d05-59c6-4c1c-bc05-9ce888f66384', now(), now(), null, 'Інтенсивний', '', 'Фітнес', 12);`);
        await queryRunner.query(`INSERT INTO public."gym-subscriptions" (id, created_at, updated_at, deleted_at, "title", "description", "activity_type", "available_trainings") 
                                       VALUES('501b6e82-7d96-4d6a-80dc-cce6003a689f', now(), now(), null, 'Акробатика (діти 8-10р. PRO)', '', 'Акробатика', 12);`);
        await queryRunner.query(`INSERT INTO public."gym-subscriptions" (id, created_at, updated_at, deleted_at, "title", "description", "activity_type", "available_trainings") 
                                       VALUES('b3ea76f0-915d-4e8a-957f-57ee354be28e', now(), now(), null, 'Акробатика (діти 11-14р. PRO)', '', 'Акробатика', 12);`);
        await queryRunner.query(`INSERT INTO public."gym-subscriptions" (id, created_at, updated_at, deleted_at, "title", "description", "activity_type", "available_trainings") 
                                       VALUES('12ccf679-4dff-4f49-90ed-61b2a8684401', now(), now(), null, 'Акробатика (діти 8-10р.)', '', 'Акробатика', 12);`);
        await queryRunner.query(`INSERT INTO public."gym-subscriptions" (id, created_at, updated_at, deleted_at, "title", "description", "activity_type", "available_trainings") 
                                       VALUES('b3a09d27-8629-4949-919e-816151645f4e', now(), now(), null, 'Акробатика (діти 11-14р.)', '', 'Акробатика', 12);`);

        await queryRunner.query(`INSERT INTO public."training-packages" (id, created_at, updated_at, deleted_at, "beginning_date", "expiration_date", "trainings_amount", "used_trainings_amount", "missed_trainings_amount", "athlete_id", "gym_subscription_id")
                                       VALUES('2fa89724-a884-4fa6-9edd-400f6745c7a8', now(), now(), null, '2024-04-30', '2024-05-30', 12, 6, 1, 'd2c83ef4-6ee4-41fa-945c-8c655223ee2d', 'd7e67d05-59c6-4c1c-bc05-9ce888f66384');`);
        await queryRunner.query(`INSERT INTO public."training-packages" (id, created_at, updated_at, deleted_at, "beginning_date", "expiration_date", "trainings_amount", "used_trainings_amount", "missed_trainings_amount", "athlete_id", "gym_subscription_id")
                                       VALUES('487d7352-571c-4514-9afd-34730be84447', now(), now(), null, '2024-03-19', '2024-04-19', 8, 8, 0, '6edc4cec-d48a-4ee3-a1ee-dcb780eb89a8', 'c8afe065-c2f0-4e92-9251-87cbc932a7ed');`);
        await queryRunner.query(`INSERT INTO public."training-packages" (id, created_at, updated_at, deleted_at, "beginning_date", "expiration_date", "trainings_amount", "used_trainings_amount", "missed_trainings_amount", "athlete_id", "gym_subscription_id")
                                       VALUES('d10b00bd-ddfd-4731-bc74-bde1eeea8c91', now(), now(), null, '2024-03-15', '2024-04-15', 4, 4, 0, '86067fb3-81cf-4765-b527-8b72ba2798e5', '975ac6c8-5ac7-401e-bdd3-6080f8a0047b');`);

        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('38cb3382-8f59-4b88-ae60-99a764a003b9', now(), now(), null, '2024-05-01 17:00', '2024-05-01 18:30', 'Акробатика (діти 11-14р.)', 'Групове заняття', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('898f665c-80aa-4a3e-a25e-ccc4ef6c338b', now(), now(), null, '2024-05-03 17:00', '2024-05-03 18:30', 'Акробатика (діти 11-14р.)', 'Групове заняття', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('40d3b54b-f490-4120-aaa9-b0626e049ad4', now(), now(), null, '2024-05-06 17:00', '2024-05-06 18:30', 'Акробатика (діти 11-14р.)', 'Групове заняття', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('a8a0e3bc-f5be-4e93-b426-ad03d383495b', now(), now(), null, '2024-05-08 17:00', '2024-05-08 18:30', 'Акробатика (діти 11-14р.)', 'Групове заняття', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('a52eca7f-033f-4c81-a629-6242f05607b1', now(), now(), null, '2024-05-10 17:00', '2024-05-10 18:30', 'Акробатика (діти 11-14р.)', 'Групове заняття', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('9a538be1-7448-4f50-86a1-b0cb907c6d97', now(), now(), null, '2024-05-13 17:00', '2024-05-13 18:30', 'Акробатика (діти 11-14р.)', 'Групове заняття', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('c553fb9e-82ba-4ba4-b176-36618853d740', now(), now(), null, '2024-05-15 17:00', '2024-05-15 18:30', 'Акробатика (діти 11-14р.)', 'Групове заняття', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('b7a9c865-694d-4ba4-8f89-646656ee3bbe', now(), now(), null, '2024-05-17 17:00', '2024-05-17 18:30', 'Акробатика (діти 11-14р.)', 'Групове заняття', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('80c2af38-af8a-476f-a385-f089724a82ce', now(), now(), null, '2024-05-20 17:00', '2024-05-20 18:30', 'Акробатика (діти 11-14р.)', 'Групове заняття', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('9043535a-e14b-4a7a-b4bf-5dfc6964fc1c', now(), now(), null, '2024-05-22 17:00', '2024-05-22 18:30', 'Акробатика (діти 11-14р.)', 'Групове заняття', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('de30eae8-0527-4e29-a672-56bfe3b9d5ae', now(), now(), null, '2024-05-24 17:00', '2024-05-24 18:30', 'Акробатика (діти 11-14р.)', 'Групове заняття', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('e876da0f-4d2b-4811-8e5b-fd8121550c70', now(), now(), null, '2024-05-27 17:00', '2024-05-27 18:30', 'Акробатика (діти 11-14р.)', 'Групове заняття', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('229d9d04-1d05-45a2-abc3-f0461630ef94', now(), now(), null, '2024-05-29 17:00', '2024-05-29 18:30', 'Акробатика (діти 11-14р.)', 'Групове заняття', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('afbc9745-cad6-4357-8bf5-d444eb8c0951', now(), now(), null, '2024-05-31 17:00', '2024-05-31 18:30', 'Акробатика (діти 11-14р.)', 'Групове заняття', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);

        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('7cdbadc9-ece1-4573-a0e9-5e3256870367', now(), now(), null, '2024-05-01 18:30', '2024-05-01 19:30', 'Акробатика (діти 8-10р.)', 'Групове заняття', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('b0a9b352-685b-4760-946d-1eef3fc252c8', now(), now(), null, '2024-05-03 18:30', '2024-05-03 19:30', 'Акробатика (діти 8-10р.)', 'Групове заняття', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('478e1b7f-35d6-49d4-be42-d33efa396417', now(), now(), null, '2024-05-06 18:30', '2024-05-06 19:30', 'Акробатика (діти 8-10р.)', 'Групове заняття', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('e0eda03d-1d63-495e-8b0f-60c88f274563', now(), now(), null, '2024-05-08 18:30', '2024-05-08 19:30', 'Акробатика (діти 8-10р.)', 'Групове заняття', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('7a71b1d9-6433-4473-b1d8-309689667551', now(), now(), null, '2024-05-10 18:30', '2024-05-10 19:30', 'Акробатика (діти 8-10р.)', 'Групове заняття', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('e444a744-4526-43d0-a7cb-bd93af9b3e87', now(), now(), null, '2024-05-13 18:30', '2024-05-13 19:30', 'Акробатика (діти 8-10р.)', 'Групове заняття', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('f34b1095-6456-423c-8d9b-a0230cbbf324', now(), now(), null, '2024-05-15 18:30', '2024-05-15 19:30', 'Акробатика (діти 8-10р.)', 'Групове заняття', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('1782121a-f5da-4ee2-9955-8f78caded230', now(), now(), null, '2024-05-17 18:30', '2024-05-17 19:30', 'Акробатика (діти 8-10р.)', 'Групове заняття', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('e3630a69-d86d-4a3c-8146-cfeb4820a3af', now(), now(), null, '2024-05-20 18:30', '2024-05-20 19:30', 'Акробатика (діти 8-10р.)', 'Групове заняття', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('e0bf1fdc-3423-4f21-83eb-7aab434ab5e6', now(), now(), null, '2024-05-22 18:30', '2024-05-22 19:30', 'Акробатика (діти 8-10р.)', 'Групове заняття', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('8c0029a4-144a-4c71-9067-589fabfc2127', now(), now(), null, '2024-05-24 18:30', '2024-05-24 19:30', 'Акробатика (діти 8-10р.)', 'Групове заняття', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('42bb79f0-ebe1-4848-af87-7b643a81e8b5', now(), now(), null, '2024-05-27 18:30', '2024-05-27 19:30', 'Акробатика (діти 8-10р.)', 'Групове заняття', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('df32b85d-2c20-43c4-8b29-1698b604aa11', now(), now(), null, '2024-05-29 18:30', '2024-05-29 19:30', 'Акробатика (діти 8-10р.)', 'Групове заняття', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('f60567b6-3e97-436b-b676-9aacf3a172ca', now(), now(), null, '2024-05-31 18:30', '2024-05-31 19:30', 'Акробатика (діти 8-10р.)', 'Групове заняття', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);


        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('f5847afd-8ddf-43f6-8676-f9574a421126', now(), now(), null, '2024-04-30 09:00', '2024-04-30 10:00', 'Фітнес', 'Групове заняття', '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('2eb54d6c-926b-42a6-ba04-1bbb29f49170', now(), now(), null, '2024-05-02 09:00', '2024-05-02 10:00', 'Фітнес', 'Групове заняття', '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('ad8b3ee6-5164-4b33-8aa4-654e1d1fe238', now(), now(), null, '2024-05-04 09:00', '2024-05-04 10:00', 'Фітнес', 'Групове заняття', '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('fa1e0232-8a4f-4bdd-a819-8a13bf3f7b04', now(), now(), null, '2024-05-07 09:00', '2024-05-07 10:00', 'Фітнес', 'Групове заняття', '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('9af2a63a-e07c-49f5-a731-0578027a5e84', now(), now(), null, '2024-05-09 09:00', '2024-05-09 10:00', 'Фітнес', 'Групове заняття', '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('397f1ab4-333a-41c1-93d2-4712d2a2e4a5', now(), now(), null, '2024-05-11 09:00', '2024-05-11 10:00', 'Фітнес', 'Групове заняття', '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('e2968173-8202-40a1-86cc-0d195a006256', now(), now(), null, '2024-05-14 09:00', '2024-05-14 10:00', 'Фітнес', 'Групове заняття', '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('42700a4c-81b4-4386-a395-cd4d4a9ca733', now(), now(), null, '2024-05-16 09:00', '2024-05-16 10:00', 'Фітнес', 'Групове заняття', '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('96bdb8c8-b26f-4ad7-a3b4-9628403895db', now(), now(), null, '2024-05-18 09:00', '2024-05-18 10:00', 'Фітнес', 'Групове заняття', '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('4e785ea2-1101-4fcd-878e-f57908142e4f', now(), now(), null, '2024-05-21 09:00', '2024-05-21 10:00', 'Фітнес', 'Групове заняття', '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('8b834f5f-62cd-4078-a792-e25532217e91', now(), now(), null, '2024-05-23 09:00', '2024-05-23 10:00', 'Фітнес', 'Групове заняття', '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('0143dd68-fe7c-4495-b03f-8c748188595c', now(), now(), null, '2024-05-25 09:00', '2024-05-25 10:00', 'Фітнес', 'Групове заняття', '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('8dfc7e0d-fa37-4903-80e9-ad4f5b5b7757', now(), now(), null, '2024-05-28 09:00', '2024-05-28 10:00', 'Фітнес', 'Групове заняття', '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public."schedule-items" (id, created_at, updated_at, deleted_at, "start", "end", "title", "occasion_type", "group_id", "coach_id")
                                       VALUES('57c539f1-cc2a-4b96-af64-72cdf03fe8e7', now(), now(), null, '2024-05-30 09:00', '2024-05-30 10:00', 'Фітнес', 'Групове заняття', '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);

        await queryRunner.query(`INSERT INTO public."users-attendances" (id, created_at, updated_at, deleted_at, "start_at", "end_at", "visited", "group_id", "conducted_coach_id", "athlete_id")
                                       VALUES('d9d6d117-d791-45b9-8418-29c9be66c897', now(), now(), null, '2024-05-01 18:30', '2024-05-01 19:30', true, 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b', '6edc4cec-d48a-4ee3-a1ee-dcb780eb89a8');`);
        await queryRunner.query(`INSERT INTO public."users-attendances" (id, created_at, updated_at, deleted_at, "start_at", "end_at", "visited", "group_id", "conducted_coach_id", "athlete_id")
                                       VALUES('79189a39-5f50-4c70-ac19-480f737b7b9c', now(), now(), null, '2024-05-01 18:30', '2024-05-01 19:30', true, 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b', '86067fb3-81cf-4765-b527-8b72ba2798e5');`);
        await queryRunner.query(`INSERT INTO public."users-attendances" (id, created_at, updated_at, deleted_at, "start_at", "end_at", "visited", "group_id", "conducted_coach_id", "athlete_id")
                                       VALUES('fcc21bf8-b0c0-4f4d-8804-efdd10f8ac38', now(), now(), null, '2024-04-30 09:00', '2024-04-30 10:00', true, '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b', 'd2c83ef4-6ee4-41fa-945c-8c655223ee2d');`);
        await queryRunner.query(`INSERT INTO public."users-attendances" (id, created_at, updated_at, deleted_at, "start_at", "end_at", "visited", "group_id", "conducted_coach_id", "athlete_id")
                                       VALUES('e12d48b7-6b31-4f5e-9a7f-a279f08a9776', now(), now(), null, '2024-05-02 09:00', '2024-05-02 10:00', true, '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b', 'd2c83ef4-6ee4-41fa-945c-8c655223ee2d');`);
        await queryRunner.query(`INSERT INTO public."users-attendances" (id, created_at, updated_at, deleted_at, "start_at", "end_at", "visited", "group_id", "conducted_coach_id", "athlete_id")
                                       VALUES('195ce38d-d731-4b95-8c72-4dfa36f69548', now(), now(), null, '2024-05-04 09:00', '2024-05-04 10:00', true, '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b', 'd2c83ef4-6ee4-41fa-945c-8c655223ee2d');`);
        await queryRunner.query(`INSERT INTO public."users-attendances" (id, created_at, updated_at, deleted_at, "start_at", "end_at", "visited", "group_id", "conducted_coach_id", "athlete_id")
                                       VALUES('02820c87-cd49-445f-a5ad-75f8e5fe5935', now(), now(), null, '2024-05-07 09:00', '2024-05-07 10:00', true, '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b', 'd2c83ef4-6ee4-41fa-945c-8c655223ee2d');`);
        await queryRunner.query(`INSERT INTO public."users-attendances" (id, created_at, updated_at, deleted_at, "start_at", "end_at", "visited", "group_id", "conducted_coach_id", "athlete_id")
                                       VALUES('4abd7765-52cb-46f5-a678-12c42e555142', now(), now(), null, '2024-05-09 09:00', '2024-05-09 10:00', true, '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b', 'd2c83ef4-6ee4-41fa-945c-8c655223ee2d');`);
        await queryRunner.query(`INSERT INTO public."users-attendances" (id, created_at, updated_at, deleted_at, "start_at", "end_at", "visited", "working_off_allowed", "group_id", "conducted_coach_id", "athlete_id")
                                       VALUES('b466aa2e-eb20-4dfc-841a-1d33b5608168', now(), now(), null, '2024-05-11 09:00', '2024-05-11 10:00', false, true, '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b', 'd2c83ef4-6ee4-41fa-945c-8c655223ee2d');`);
        await queryRunner.query(`INSERT INTO public."users-attendances" (id, created_at, updated_at, deleted_at, "start_at", "end_at", "visited", "group_id", "conducted_coach_id", "athlete_id")
                                       VALUES('2e625ccb-5b5b-4f71-a111-47b8bb58532b', now(), now(), null, '2024-05-14 09:00', '2024-05-14 10:00', true, '7378f992-c91e-48b7-98bc-1d84bf26affd', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b', 'd2c83ef4-6ee4-41fa-945c-8c655223ee2d');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "athletes-groups" WHERE id IN(
            '824ddcb6-a27f-4f48-a44a-46cdc9e00a91',
            'e9599d1b-475f-4323-99bd-9e44acb324a9', 
            'a9d4a6c0-9780-4ae3-89f7-44bd3289eb1f',
            'af89f2f2-facf-4c4d-9cfd-de869f1e1bd8',
            '3e6574fd-75b7-4c07-846e-81b6fe69ebe2',
            '501b6e82-7d96-4d6a-80dc-cce6003a689f',
        );`);
        await queryRunner.query(`DELETE FROM "users" WHERE id IN(
            '962ff543-51ae-4379-bd2b-639b90f93409',
            '9afbf696-2428-448e-8cb8-8d953d01afe5', 
            '6d2bb96b-77c3-48b3-afc1-e1cdf289ed4b',
            '418e9f3a-6679-4190-925c-e2970ee37e01',
            'deb3ccea-9612-4d1d-a420-39dbf4a9e0bd',
            '8d82e994-034a-4bab-a786-746c0815358e',
            '52db0d5e-c193-4bfb-ae89-e90c44651c56',
            'adac1111-3dc1-4a8b-9361-5a778d01a9af',
        );`);
        await queryRunner.query(`DELETE FROM "groups" WHERE id IN(
            'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', 
            '8a02bd73-d34e-4f7d-a26a-deb98565b6fd', 
            '7378f992-c91e-48b7-98bc-1d84bf26affd',
        );`);
        await queryRunner.query(`DELETE FROM "training-packages" WHERE id IN(
            '2fa89724-a884-4fa6-9edd-400f6745c7a8', 
            '487d7352-571c-4514-9afd-34730be84447', 
            'd10b00bd-ddfd-4731-bc74-bde1eeea8c91',
        );`);
        await queryRunner.query(`DELETE FROM "gym-subscriptions" WHERE id IN(
            '975ac6c8-5ac7-401e-bdd3-6080f8a0047b', 
            'c8afe065-c2f0-4e92-9251-87cbc932a7ed', 
            'd7e67d05-59c6-4c1c-bc05-9ce888f66384',
            'b3ea76f0-915d-4e8a-957f-57ee354be28e',
            '12ccf679-4dff-4f49-90ed-61b2a8684401',
            'b3a09d27-8629-4949-919e-816151645f4e',
        );`);
    }
}
