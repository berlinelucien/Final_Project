/* Replace with your SQL commands */


CREATE TABLE user_accounts (
    id integer NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    picture text NOT NULL,
    sub text NOT NULL
);


CREATE TABLE skin_condition (
    id integer NOT NULL,
    photo text NOT NULL,
    condition_name text NOT NULL,
    symptoms text NOT NULL
);


CREATE TABLE favorites (
    id integer NOT NULL,
    skin_id integer,
    user_id integer
);

CREATE TABLE notes (
    id integer NOT NULL,
    notes text NOT NULL,
);

INSERT INTO skin_condition (id, photo, condition_name, symptoms) OVERRIDING SYSTEM VALUE VALUES (1, 'https://images.squarespace-cdn.com/content/v1/5ef2664ee62f61085293e858/1611501949126-LJ1XI7A79TPXUA0SNTMJ/P1150191-447medical%2C+tinea+versicolor.jpg?format=2500w', 'Tinea Versicolor', 'Patches of skin discoloration, usually on the back, chest, neck and upper arms, which may appear lighter or darker than usual
Mild itching
Scaling');
INSERT INTO skin_condition (id, photo, condition_name, symptoms) OVERRIDING SYSTEM VALUE VALUES (3, 'https://images.squarespace-cdn.com/content/v1/5ef2664ee62f61085293e858/1605373747699-U2MDPBO7S3AV97C1PKNT/P1110243-380medical%2C+papular+urticaria.jpg?format=750w', 'Urticaria/Hives', 'Hives are red, itchy welts that result from a skin reaction.');
INSERT INTO skin_condition (id, photo, condition_name, symptoms) OVERRIDING SYSTEM VALUE VALUES (4, 'https://images.squarespace-cdn.com/content/v1/5ef2664ee62f61085293e858/1611500281810-7OCX7N3OIP1JPR9DS70N/P1320824-81+measles.jpg?format=750w', 'Measels', 'In darker skin, measles appears to look hyperpigmented rather than erythematous looking. These could easily be mistaken for petechiae.');

SELECT pg_catalog.setval('user_accounts_id_seq', 2, true);

