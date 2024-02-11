import { MigrationInterface, QueryRunner } from 'typeorm';

export class FillDefaultDataMigration1707576203300 implements MigrationInterface {
    name = 'FillDefaultDataMigration1707576203300';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "username", "password", "system_role") 
                                       VALUES('52db0d5e-c193-4bfb-ae89-e90c44651c56', now(), now(), null, 'Milena', 'Kholodnytska', '1978-08-08', 'milenakholodnytska@gmail.com', 'milena', 'milena08', 'Coach');`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "username", "password", "system_role") 
                                       VALUES('adac1111-3dc1-4a8b-9361-5a778d01a9af', now(), now(), null, 'Arina', 'Kholodnytska', '2003-05-20', 'arinakholodnytska6@gmail.com', 'arina', '12345678', 'Admin');`);

        await queryRunner.query(`INSERT INTO public.coaches (id, created_at, updated_at, deleted_at, "user_id") 
                                       VALUES('cf0d6d0e-354f-45ee-956f-045fc3a039c3', now(), now(), null, '52db0d5e-c193-4bfb-ae89-e90c44651c56');`);
        await queryRunner.query(`INSERT INTO public.coaches (id, created_at, updated_at, deleted_at, "user_id") 
                                       VALUES('30d4eeb9-8c38-4ac2-8884-b1ffffa0928b', now(), now(), null, 'adac1111-3dc1-4a8b-9361-5a778d01a9af');`);

        await queryRunner.query(`INSERT INTO public.groups (id, created_at, updated_at, deleted_at, "name", "coach_id") 
                                       VALUES('c39cb1b3-9172-4b71-a2fe-2e0c748ec36b', now(), now(), null, 'GR-01', 'cf0d6d0e-354f-45ee-956f-045fc3a039c3');`);
        await queryRunner.query(`INSERT INTO public.groups (id, created_at, updated_at, deleted_at, "name", "coach_id") 
                                       VALUES('8a02bd73-d34e-4f7d-a26a-deb98565b6fd', now(), now(), null, 'GR-02', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);
        await queryRunner.query(`INSERT INTO public.groups (id, created_at, updated_at, deleted_at, "name", "coach_id") 
                                       VALUES('7378f992-c91e-48b7-98bc-1d84bf26affd', now(), now(), null, 'GR-03', '30d4eeb9-8c38-4ac2-8884-b1ffffa0928b');`);

        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "username", "password", "system_role", "fit_cent_amount") 
                                       VALUES('962ff543-51ae-4379-bd2b-639b90f93409', now(), now(), null, 'Jack', 'Lemire', '1992-12-02', 'jack@gmail.com', 'jackLemire', 'jack1202', 'Athlete', 50);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "username", "password", "system_role", "fit_cent_amount") 
                                       VALUES('9afbf696-2428-448e-8cb8-8d953d01afe5', now(), now(), null, 'Kristin', 'Frenette', '1998-01-25', 'kristin@gmail.com', 'kristinFrenette', 'frenette25', 'Athlete', 150);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "username", "password", "system_role", "fit_cent_amount") 
                                       VALUES('6d2bb96b-77c3-48b3-afc1-e1cdf289ed4b', now(), now(), null, 'Sandy', 'Clark', '1997-03-17', 'sandy@gmail.com', 'sandyClark', 'sandy123', 'Athlete', 0);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "username", "password", "system_role", "fit_cent_amount") 
                                       VALUES('418e9f3a-6679-4190-925c-e2970ee37e01', now(), now(), null, 'Shirley', 'Hodgson', '1989-04-21', 'shirley@gmail.com', 'shirley', 'hodgson1', 'Athlete', 175);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "username", "password", "system_role", "fit_cent_amount") 
                                       VALUES('deb3ccea-9612-4d1d-a420-39dbf4a9e0bd', now(), now(), null, 'Joanna', 'Ford', '2001-11-08', 'joanna@gmail.com', 'joanna', 'joanna2001', 'Athlete', 300);`);
        await queryRunner.query(`INSERT INTO public.users (id, created_at, updated_at, deleted_at, "name", "surname", "date_of_birth", "email", "username", "password", "system_role", "fit_cent_amount") 
                                       VALUES('8d82e994-034a-4bab-a786-746c0815358e', now(), now(), null, 'Jeanette', 'Donnelly', '2000-09-26', 'jeanette@gmail.com', 'jeanette', 'jeanette777', 'Athlete', 100);`);

        await queryRunner.query(`INSERT INTO public.athletes (id, created_at, updated_at, deleted_at, "user_id", "group_id") 
                                       VALUES('5289cf9e-e4cf-479c-a17b-15ac019579a5', now(), now(), null, '962ff543-51ae-4379-bd2b-639b90f93409', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b');`);
        await queryRunner.query(`INSERT INTO public.athletes (id, created_at, updated_at, deleted_at, "user_id", "group_id") 
                                       VALUES('86067fb3-81cf-4765-b527-8b72ba2798e5', now(), now(), null, '9afbf696-2428-448e-8cb8-8d953d01afe5', 'c39cb1b3-9172-4b71-a2fe-2e0c748ec36b');`);
        await queryRunner.query(`INSERT INTO public.athletes (id, created_at, updated_at, deleted_at, "user_id", "group_id") 
                                       VALUES('6edc4cec-d48a-4ee3-a1ee-dcb780eb89a8', now(), now(), null, '6d2bb96b-77c3-48b3-afc1-e1cdf289ed4b', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd');`);
        await queryRunner.query(`INSERT INTO public.athletes (id, created_at, updated_at, deleted_at, "user_id", "group_id") 
                                       VALUES('3cee354f-7995-4bf1-a0b0-ece494fcdae3', now(), now(), null, '418e9f3a-6679-4190-925c-e2970ee37e01', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd');`);
        await queryRunner.query(`INSERT INTO public.athletes (id, created_at, updated_at, deleted_at, "user_id", "group_id") 
                                       VALUES('6109d551-567b-4a15-b39e-a19fdad047f3', now(), now(), null, 'deb3ccea-9612-4d1d-a420-39dbf4a9e0bd', '8a02bd73-d34e-4f7d-a26a-deb98565b6fd');`);
        await queryRunner.query(`INSERT INTO public.athletes (id, created_at, updated_at, deleted_at, "user_id", "group_id") 
                                       VALUES('d2c83ef4-6ee4-41fa-945c-8c655223ee2d', now(), now(), null, '8d82e994-034a-4bab-a786-746c0815358e', '7378f992-c91e-48b7-98bc-1d84bf26affd');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
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
