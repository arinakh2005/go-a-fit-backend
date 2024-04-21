import { MigrationInterface, QueryRunner } from 'typeorm';

export class FillDefaultDataMigration1707576203300 implements MigrationInterface {
    name = 'FillDefaultDataMigration1707576203300';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "system_role") 
                                       VALUES('52db0d5e-c193-4bfb-ae89-e90c44651c56', now(), now(), null, 'Milena', 'Kholodnytska', '1978-08-08', 'milenakholodnytska@gmail.com', '+380955767084', 'milena', 'milena08', 'Тренер');`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "system_role") 
                                       VALUES('adac1111-3dc1-4a8b-9361-5a778d01a9af', now(), now(), null, 'Arina', 'Kholodnytska', '2003-05-20', 'arinakholodnytska6@gmail.com', '+380686302468', 'arina', '$2b$12$GrSt75pmLfy3BLfUN0RMTujjEJZXLe9yC9dZce2c6w8eMQunzp/U2', 'Тренер');`);

        await queryRunner.query(`INSERT INTO public.coaches (id, created_at, updated_at, deleted_at, "user_id") 
                                       VALUES('cf0d6d0e-354f-45ee-956f-045fc3a039c3', now(), now(), null, '52db0d5e-c193-4bfb-ae89-e90c44651c56');`);
        await queryRunner.query(`INSERT INTO public.coaches (id, created_at, updated_at, deleted_at, "user_id") 
                                       VALUES('30d4eeb9-8c38-4ac2-8884-b1ffffa0928b', now(), now(), null, 'adac1111-3dc1-4a8b-9361-5a778d01a9af');`);

        await queryRunner.query(`INSERT INTO public.groups (id, created_at, updated_at, deleted_at, "title", "description", "coach_id") 
                                       VALUES('c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', now(), now(), null, 'GR-01', 'Пн/Ср/Пт 17:00-18:30', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public.groups (id, created_at, updated_at, deleted_at, "title", "description", "coach_id") 
                                       VALUES('8a02bd73-d34e-4f7d-a26a-deb98565b6fd', now(), now(), null, 'GR-02', 'Пн/Ср/Пт 18:30-19:30', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public.groups (id, created_at, updated_at, deleted_at, "title", "description", "coach_id") 
                                       VALUES('7378f992-c91e-48b7-98bc-1d84bf26affd', now(), now(), null, 'GR-03', 'Вт/Чт/Сб 9:00-10:00', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);

        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "image_url", "system_role", "fit_cent_amount") 
                                       VALUES('962ff543-51ae-4379-bd2b-639b90f93409', now(), now(), null, 'Anton', 'Mazur', '1992-12-02', 'anton.m@gmail.com', '+380936172490', 'anton_m', 'anton1202', 'https://drive.google.com/thumbnail?id=1b16EXSIF13ZYxPSOAt6kXiVABaeSEY4X', 'Атлет', 50);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "image_url", "system_role", "fit_cent_amount") 
                                       VALUES('9afbf696-2428-448e-8cb8-8d953d01afe5', now(), now(), null, 'Halyna', 'Shevchenko', '1998-01-25', 'shevchenko_h@gmail.com', '+380934145347', 'halyna_shevchenko', 'shevchenko25', 'https://drive.google.com/thumbnail?id=1__0GtJU1E-4gyleOstJ1aq-T5JVXwRCW', 'Атлет', 150);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "image_url", "system_role", "fit_cent_amount") 
                                       VALUES('6d2bb96b-77c3-48b3-afc1-e1cdf289ed4b', now(), now(), null, 'Nadiya', 'Honchar', '1997-03-17', 'honchar@gmail.com', '+380934457453', 'nadiya_1', 'Honchar123', 'https://drive.google.com/thumbnail?id=1buZlk694cR9My-AdclkdjTMxKxjag9jQ', 'Атлет', 0);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "image_url", "system_role", "fit_cent_amount") 
                                       VALUES('418e9f3a-6679-4190-925c-e2970ee37e01', now(), now(), null, 'Oleh', 'Pavlenko', '1989-04-21', 'pavlenko_oleg@gmail.com','+380739548457', 'pavlenko', 'pavlenko1', 'https://drive.google.com/thumbnail?id=12rQK4AGhrpQoH_SRxMGk6-CcYbVoQ77Q', 'Атлет', 175);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "image_url", "system_role", "fit_cent_amount") 
                                       VALUES('deb3ccea-9612-4d1d-a420-39dbf4a9e0bd', now(), now(), null, 'Ivanna', 'Usenko', '2001-11-08', 'usenko@gmail.com', '+380736376433', 'ivanna', 'usenko2001', 'https://drive.google.com/thumbnail?id=1pd7h9YPX2-0a0EnxUsJilY4geWX3rPXN', 'Атлет', 300);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "phone", "username", "password", "image_url", "system_role", "fit_cent_amount") 
                                       VALUES('8d82e994-034a-4bab-a786-746c0815358e', now(), now(), null, 'Alla', 'Fomenko', '2000-09-26', 'fomenko@gmail.com', '+380914810995', 'alla.fomenko', 'fomenko777', 'https://drive.google.com/thumbnail?id=1wFC08i6eKS3E-zCz6Ad11CZsWja1m-LN', 'Атлет', 100);`);

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
                                       VALUES('501b6e82-7d96-4d6a-80dc-cce6003a689f', now(), now(), null, 'd2c83ef4-6ee4-41fa-945c-8c655223ee2d', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b');`);

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
    }
}
