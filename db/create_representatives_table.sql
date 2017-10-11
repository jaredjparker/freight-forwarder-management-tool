create table Representatives(
    rep_id serial primary key,
    airline_id integer,
    location text,
    department text,
    cell_phone integer,
    email text,
    office_phone integer,
    notes text
);