PGDMP     2                    {            ubicacion_persona    15.2 (Debian 15.2-1.pgdg110+1)    15.2 X    s           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            t           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            u           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            v           1262    16384    ubicacion_persona    DATABASE     |   CREATE DATABASE ubicacion_persona WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';
 !   DROP DATABASE ubicacion_persona;
                postgres    false            �            1259    16453    ciudad    TABLE     �   CREATE TABLE public.ciudad (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion character varying(200),
    "departamentoId" integer NOT NULL
);
    DROP TABLE public.ciudad;
       public         heap    postgres    false            �            1259    16452    ciudad_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ciudad_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.ciudad_id_seq;
       public          postgres    false    227            w           0    0    ciudad_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.ciudad_id_seq OWNED BY public.ciudad.id;
          public          postgres    false    226            �            1259    16462    departamento    TABLE     �   CREATE TABLE public.departamento (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion character varying(200)
);
     DROP TABLE public.departamento;
       public         heap    postgres    false            �            1259    16461    departamento_id_seq    SEQUENCE     �   CREATE SEQUENCE public.departamento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.departamento_id_seq;
       public          postgres    false    229            x           0    0    departamento_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.departamento_id_seq OWNED BY public.departamento.id;
          public          postgres    false    228            �            1259    16422    ingreso    TABLE     �   CREATE TABLE public.ingreso (
    id integer NOT NULL,
    fecha timestamp with time zone DEFAULT now() NOT NULL,
    detalles text,
    "personaId" integer NOT NULL,
    "zonaId" integer NOT NULL
);
    DROP TABLE public.ingreso;
       public         heap    postgres    false            �            1259    16421    ingreso_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ingreso_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.ingreso_id_seq;
       public          postgres    false    221            y           0    0    ingreso_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.ingreso_id_seq OWNED BY public.ingreso.id;
          public          postgres    false    220            �            1259    16432    persona    TABLE     �  CREATE TABLE public.persona (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100),
    direccion character varying(150),
    ci character varying(50) NOT NULL,
    telefono character varying(40),
    email character varying(100) NOT NULL,
    password character varying(200) NOT NULL,
    fecha_nacimiento date,
    foto text,
    estado boolean DEFAULT true NOT NULL,
    "usuarioId" integer,
    "ciudadId" integer NOT NULL
);
    DROP TABLE public.persona;
       public         heap    postgres    false            �            1259    16431    persona_id_seq    SEQUENCE     �   CREATE SEQUENCE public.persona_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.persona_id_seq;
       public          postgres    false    223            z           0    0    persona_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.persona_id_seq OWNED BY public.persona.id;
          public          postgres    false    222            �            1259    16480 
   reportarse    TABLE     �   CREATE TABLE public.reportarse (
    id integer NOT NULL,
    id_persona integer NOT NULL,
    comentario character varying,
    fecha timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.reportarse;
       public         heap    postgres    false            �            1259    16479    reportarse_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reportarse_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.reportarse_id_seq;
       public          postgres    false    233            {           0    0    reportarse_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.reportarse_id_seq OWNED BY public.reportarse.id;
          public          postgres    false    232            �            1259    16471    reportarse_imagen    TABLE     v   CREATE TABLE public.reportarse_imagen (
    id integer NOT NULL,
    url text NOT NULL,
    "reportarseId" integer
);
 %   DROP TABLE public.reportarse_imagen;
       public         heap    postgres    false            �            1259    16470    reportarse_imagen_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reportarse_imagen_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.reportarse_imagen_id_seq;
       public          postgres    false    231            |           0    0    reportarse_imagen_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.reportarse_imagen_id_seq OWNED BY public.reportarse_imagen.id;
          public          postgres    false    230            �            1259    16412    salida    TABLE     �   CREATE TABLE public.salida (
    id integer NOT NULL,
    fecha timestamp with time zone DEFAULT now() NOT NULL,
    detalles text,
    "ingresoId" integer
);
    DROP TABLE public.salida;
       public         heap    postgres    false            �            1259    16411    salida_id_seq    SEQUENCE     �   CREATE SEQUENCE public.salida_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.salida_id_seq;
       public          postgres    false    219            }           0    0    salida_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.salida_id_seq OWNED BY public.salida.id;
          public          postgres    false    218            �            1259    16400 	   ubicacion    TABLE     d  CREATE TABLE public.ubicacion (
    id integer NOT NULL,
    fecha timestamp with time zone DEFAULT now() NOT NULL,
    longitud double precision DEFAULT '0'::double precision NOT NULL,
    latitud double precision DEFAULT '0'::double precision NOT NULL,
    bateria double precision,
    detalles text,
    "ingresoId" integer,
    "personaId" integer
);
    DROP TABLE public.ubicacion;
       public         heap    postgres    false            �            1259    16399    ubicacion_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ubicacion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.ubicacion_id_seq;
       public          postgres    false    217            ~           0    0    ubicacion_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.ubicacion_id_seq OWNED BY public.ubicacion.id;
          public          postgres    false    216            �            1259    16446    usuario    TABLE     a   CREATE TABLE public.usuario (
    id integer NOT NULL,
    rol character varying(60) NOT NULL
);
    DROP TABLE public.usuario;
       public         heap    postgres    false            �            1259    16445    usuario_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.usuario_id_seq;
       public          postgres    false    225                       0    0    usuario_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;
          public          postgres    false    224            �            1259    16390    zonas_estrategica    TABLE     ^  CREATE TABLE public.zonas_estrategica (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    longitud double precision DEFAULT '0'::double precision NOT NULL,
    latitud double precision DEFAULT '0'::double precision NOT NULL,
    radio double precision DEFAULT '0'::double precision NOT NULL,
    "ciudadId" integer NOT NULL
);
 %   DROP TABLE public.zonas_estrategica;
       public         heap    postgres    false            �            1259    16389    zonas_estrategica_id_seq    SEQUENCE     �   CREATE SEQUENCE public.zonas_estrategica_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.zonas_estrategica_id_seq;
       public          postgres    false    215            �           0    0    zonas_estrategica_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.zonas_estrategica_id_seq OWNED BY public.zonas_estrategica.id;
          public          postgres    false    214            �           2604    16456 	   ciudad id    DEFAULT     f   ALTER TABLE ONLY public.ciudad ALTER COLUMN id SET DEFAULT nextval('public.ciudad_id_seq'::regclass);
 8   ALTER TABLE public.ciudad ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226    227            �           2604    16465    departamento id    DEFAULT     r   ALTER TABLE ONLY public.departamento ALTER COLUMN id SET DEFAULT nextval('public.departamento_id_seq'::regclass);
 >   ALTER TABLE public.departamento ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    16425 
   ingreso id    DEFAULT     h   ALTER TABLE ONLY public.ingreso ALTER COLUMN id SET DEFAULT nextval('public.ingreso_id_seq'::regclass);
 9   ALTER TABLE public.ingreso ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    16435 
   persona id    DEFAULT     h   ALTER TABLE ONLY public.persona ALTER COLUMN id SET DEFAULT nextval('public.persona_id_seq'::regclass);
 9   ALTER TABLE public.persona ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    16483    reportarse id    DEFAULT     n   ALTER TABLE ONLY public.reportarse ALTER COLUMN id SET DEFAULT nextval('public.reportarse_id_seq'::regclass);
 <   ALTER TABLE public.reportarse ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    16474    reportarse_imagen id    DEFAULT     |   ALTER TABLE ONLY public.reportarse_imagen ALTER COLUMN id SET DEFAULT nextval('public.reportarse_imagen_id_seq'::regclass);
 C   ALTER TABLE public.reportarse_imagen ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    16415 	   salida id    DEFAULT     f   ALTER TABLE ONLY public.salida ALTER COLUMN id SET DEFAULT nextval('public.salida_id_seq'::regclass);
 8   ALTER TABLE public.salida ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    16403    ubicacion id    DEFAULT     l   ALTER TABLE ONLY public.ubicacion ALTER COLUMN id SET DEFAULT nextval('public.ubicacion_id_seq'::regclass);
 ;   ALTER TABLE public.ubicacion ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    16449 
   usuario id    DEFAULT     h   ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);
 9   ALTER TABLE public.usuario ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    16393    zonas_estrategica id    DEFAULT     |   ALTER TABLE ONLY public.zonas_estrategica ALTER COLUMN id SET DEFAULT nextval('public.zonas_estrategica_id_seq'::regclass);
 C   ALTER TABLE public.zonas_estrategica ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            j          0    16453    ciudad 
   TABLE DATA           K   COPY public.ciudad (id, nombre, descripcion, "departamentoId") FROM stdin;
    public          postgres    false    227   �j       l          0    16462    departamento 
   TABLE DATA           ?   COPY public.departamento (id, nombre, descripcion) FROM stdin;
    public          postgres    false    229   �j       d          0    16422    ingreso 
   TABLE DATA           M   COPY public.ingreso (id, fecha, detalles, "personaId", "zonaId") FROM stdin;
    public          postgres    false    221   Ck       f          0    16432    persona 
   TABLE DATA           �   COPY public.persona (id, nombre, apellido, direccion, ci, telefono, email, password, fecha_nacimiento, foto, estado, "usuarioId", "ciudadId") FROM stdin;
    public          postgres    false    223   `k       p          0    16480 
   reportarse 
   TABLE DATA           G   COPY public.reportarse (id, id_persona, comentario, fecha) FROM stdin;
    public          postgres    false    233   �k       n          0    16471    reportarse_imagen 
   TABLE DATA           D   COPY public.reportarse_imagen (id, url, "reportarseId") FROM stdin;
    public          postgres    false    231   l       b          0    16412    salida 
   TABLE DATA           B   COPY public.salida (id, fecha, detalles, "ingresoId") FROM stdin;
    public          postgres    false    219   4l       `          0    16400 	   ubicacion 
   TABLE DATA           n   COPY public.ubicacion (id, fecha, longitud, latitud, bateria, detalles, "ingresoId", "personaId") FROM stdin;
    public          postgres    false    217   Ql       h          0    16446    usuario 
   TABLE DATA           *   COPY public.usuario (id, rol) FROM stdin;
    public          postgres    false    225   nl       ^          0    16390    zonas_estrategica 
   TABLE DATA           ]   COPY public.zonas_estrategica (id, nombre, longitud, latitud, radio, "ciudadId") FROM stdin;
    public          postgres    false    215   �l       �           0    0    ciudad_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.ciudad_id_seq', 2, true);
          public          postgres    false    226            �           0    0    departamento_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.departamento_id_seq', 9, true);
          public          postgres    false    228            �           0    0    ingreso_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.ingreso_id_seq', 1, false);
          public          postgres    false    220            �           0    0    persona_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.persona_id_seq', 1, true);
          public          postgres    false    222            �           0    0    reportarse_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.reportarse_id_seq', 1, false);
          public          postgres    false    232            �           0    0    reportarse_imagen_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.reportarse_imagen_id_seq', 1, false);
          public          postgres    false    230            �           0    0    salida_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.salida_id_seq', 1, false);
          public          postgres    false    218            �           0    0    ubicacion_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.ubicacion_id_seq', 1, false);
          public          postgres    false    216            �           0    0    usuario_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.usuario_id_seq', 1, true);
          public          postgres    false    224            �           0    0    zonas_estrategica_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.zonas_estrategica_id_seq', 1, false);
          public          postgres    false    214            �           2606    16440 &   persona PK_13aefc75f60510f2be4cd243d71 
   CONSTRAINT     f   ALTER TABLE ONLY public.persona
    ADD CONSTRAINT "PK_13aefc75f60510f2be4cd243d71" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.persona DROP CONSTRAINT "PK_13aefc75f60510f2be4cd243d71";
       public            postgres    false    223            �           2606    16420 %   salida PK_37746d2fb7cd4e6986624719aaa 
   CONSTRAINT     e   ALTER TABLE ONLY public.salida
    ADD CONSTRAINT "PK_37746d2fb7cd4e6986624719aaa" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.salida DROP CONSTRAINT "PK_37746d2fb7cd4e6986624719aaa";
       public            postgres    false    219            �           2606    16478 0   reportarse_imagen PK_474985288c33491d4049cb14d11 
   CONSTRAINT     p   ALTER TABLE ONLY public.reportarse_imagen
    ADD CONSTRAINT "PK_474985288c33491d4049cb14d11" PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.reportarse_imagen DROP CONSTRAINT "PK_474985288c33491d4049cb14d11";
       public            postgres    false    231            �           2606    16488 )   reportarse PK_59f47f006c2649712a48b236697 
   CONSTRAINT     i   ALTER TABLE ONLY public.reportarse
    ADD CONSTRAINT "PK_59f47f006c2649712a48b236697" PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.reportarse DROP CONSTRAINT "PK_59f47f006c2649712a48b236697";
       public            postgres    false    233            �           2606    16410 (   ubicacion PK_6ed79468fe4f565d8be642742a3 
   CONSTRAINT     h   ALTER TABLE ONLY public.ubicacion
    ADD CONSTRAINT "PK_6ed79468fe4f565d8be642742a3" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.ubicacion DROP CONSTRAINT "PK_6ed79468fe4f565d8be642742a3";
       public            postgres    false    217            �           2606    16467 +   departamento PK_7fd6f336280fd0c7a9318464723 
   CONSTRAINT     k   ALTER TABLE ONLY public.departamento
    ADD CONSTRAINT "PK_7fd6f336280fd0c7a9318464723" PRIMARY KEY (id);
 W   ALTER TABLE ONLY public.departamento DROP CONSTRAINT "PK_7fd6f336280fd0c7a9318464723";
       public            postgres    false    229            �           2606    16398 0   zonas_estrategica PK_8925c8f0b8d33f1b423fb681814 
   CONSTRAINT     p   ALTER TABLE ONLY public.zonas_estrategica
    ADD CONSTRAINT "PK_8925c8f0b8d33f1b423fb681814" PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.zonas_estrategica DROP CONSTRAINT "PK_8925c8f0b8d33f1b423fb681814";
       public            postgres    false    215            �           2606    16451 &   usuario PK_a56c58e5cabaa04fb2c98d2d7e2 
   CONSTRAINT     f   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.usuario DROP CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2";
       public            postgres    false    225            �           2606    16458 %   ciudad PK_cef4e65aef46bbb8598e284d5d3 
   CONSTRAINT     e   ALTER TABLE ONLY public.ciudad
    ADD CONSTRAINT "PK_cef4e65aef46bbb8598e284d5d3" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.ciudad DROP CONSTRAINT "PK_cef4e65aef46bbb8598e284d5d3";
       public            postgres    false    227            �           2606    16430 &   ingreso PK_f5b9cf85dd43c68b3d4d63cbf05 
   CONSTRAINT     f   ALTER TABLE ONLY public.ingreso
    ADD CONSTRAINT "PK_f5b9cf85dd43c68b3d4d63cbf05" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.ingreso DROP CONSTRAINT "PK_f5b9cf85dd43c68b3d4d63cbf05";
       public            postgres    false    221            �           2606    16444 &   persona REL_8a21418dd09f3db7e7aa588a2f 
   CONSTRAINT     j   ALTER TABLE ONLY public.persona
    ADD CONSTRAINT "REL_8a21418dd09f3db7e7aa588a2f" UNIQUE ("usuarioId");
 R   ALTER TABLE ONLY public.persona DROP CONSTRAINT "REL_8a21418dd09f3db7e7aa588a2f";
       public            postgres    false    223            �           2606    16469 +   departamento UQ_574b538a96151008aa904a8d6f6 
   CONSTRAINT     j   ALTER TABLE ONLY public.departamento
    ADD CONSTRAINT "UQ_574b538a96151008aa904a8d6f6" UNIQUE (nombre);
 W   ALTER TABLE ONLY public.departamento DROP CONSTRAINT "UQ_574b538a96151008aa904a8d6f6";
       public            postgres    false    229            �           2606    16442 &   persona UQ_86ae2f9d6da4482363f832340bf 
   CONSTRAINT     d   ALTER TABLE ONLY public.persona
    ADD CONSTRAINT "UQ_86ae2f9d6da4482363f832340bf" UNIQUE (email);
 R   ALTER TABLE ONLY public.persona DROP CONSTRAINT "UQ_86ae2f9d6da4482363f832340bf";
       public            postgres    false    223            �           2606    16460 %   ciudad UQ_d2c61478ad47a3fc12a1e4d0fec 
   CONSTRAINT     d   ALTER TABLE ONLY public.ciudad
    ADD CONSTRAINT "UQ_d2c61478ad47a3fc12a1e4d0fec" UNIQUE (nombre);
 Q   ALTER TABLE ONLY public.ciudad DROP CONSTRAINT "UQ_d2c61478ad47a3fc12a1e4d0fec";
       public            postgres    false    227            �           2606    16509 &   ingreso FK_022152d029bedb6b440798cef09    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingreso
    ADD CONSTRAINT "FK_022152d029bedb6b440798cef09" FOREIGN KEY ("personaId") REFERENCES public.persona(id);
 R   ALTER TABLE ONLY public.ingreso DROP CONSTRAINT "FK_022152d029bedb6b440798cef09";
       public          postgres    false    223    3250    221            �           2606    16529 %   ciudad FK_60bdcd244bf2845b335ba95625f    FK CONSTRAINT     �   ALTER TABLE ONLY public.ciudad
    ADD CONSTRAINT "FK_60bdcd244bf2845b335ba95625f" FOREIGN KEY ("departamentoId") REFERENCES public.departamento(id);
 Q   ALTER TABLE ONLY public.ciudad DROP CONSTRAINT "FK_60bdcd244bf2845b335ba95625f";
       public          postgres    false    227    229    3262            �           2606    16534 0   reportarse_imagen FK_7c0cd138b56161d1502e89dd513    FK CONSTRAINT     �   ALTER TABLE ONLY public.reportarse_imagen
    ADD CONSTRAINT "FK_7c0cd138b56161d1502e89dd513" FOREIGN KEY ("reportarseId") REFERENCES public.reportarse(id);
 \   ALTER TABLE ONLY public.reportarse_imagen DROP CONSTRAINT "FK_7c0cd138b56161d1502e89dd513";
       public          postgres    false    233    231    3268            �           2606    16494 (   ubicacion FK_87aac5e183d82d9fca07a15ba38    FK CONSTRAINT     �   ALTER TABLE ONLY public.ubicacion
    ADD CONSTRAINT "FK_87aac5e183d82d9fca07a15ba38" FOREIGN KEY ("ingresoId") REFERENCES public.ingreso(id);
 T   ALTER TABLE ONLY public.ubicacion DROP CONSTRAINT "FK_87aac5e183d82d9fca07a15ba38";
       public          postgres    false    217    3248    221            �           2606    16504 %   salida FK_88e2cdad828f7d6ae4342d785c5    FK CONSTRAINT     �   ALTER TABLE ONLY public.salida
    ADD CONSTRAINT "FK_88e2cdad828f7d6ae4342d785c5" FOREIGN KEY ("ingresoId") REFERENCES public.ingreso(id);
 Q   ALTER TABLE ONLY public.salida DROP CONSTRAINT "FK_88e2cdad828f7d6ae4342d785c5";
       public          postgres    false    3248    221    219            �           2606    16519 &   persona FK_8a21418dd09f3db7e7aa588a2f4    FK CONSTRAINT     �   ALTER TABLE ONLY public.persona
    ADD CONSTRAINT "FK_8a21418dd09f3db7e7aa588a2f4" FOREIGN KEY ("usuarioId") REFERENCES public.usuario(id);
 R   ALTER TABLE ONLY public.persona DROP CONSTRAINT "FK_8a21418dd09f3db7e7aa588a2f4";
       public          postgres    false    3256    225    223            �           2606    16524 &   persona FK_8e04d84fb44c6ab95093edbf96a    FK CONSTRAINT     �   ALTER TABLE ONLY public.persona
    ADD CONSTRAINT "FK_8e04d84fb44c6ab95093edbf96a" FOREIGN KEY ("ciudadId") REFERENCES public.ciudad(id);
 R   ALTER TABLE ONLY public.persona DROP CONSTRAINT "FK_8e04d84fb44c6ab95093edbf96a";
       public          postgres    false    3258    227    223            �           2606    16489 0   zonas_estrategica FK_96ed283a62b320a769a9f51f216    FK CONSTRAINT     �   ALTER TABLE ONLY public.zonas_estrategica
    ADD CONSTRAINT "FK_96ed283a62b320a769a9f51f216" FOREIGN KEY ("ciudadId") REFERENCES public.ciudad(id);
 \   ALTER TABLE ONLY public.zonas_estrategica DROP CONSTRAINT "FK_96ed283a62b320a769a9f51f216";
       public          postgres    false    227    3258    215            �           2606    16499 (   ubicacion FK_a5850840037217a62ac92ee93f6    FK CONSTRAINT     �   ALTER TABLE ONLY public.ubicacion
    ADD CONSTRAINT "FK_a5850840037217a62ac92ee93f6" FOREIGN KEY ("personaId") REFERENCES public.persona(id);
 T   ALTER TABLE ONLY public.ubicacion DROP CONSTRAINT "FK_a5850840037217a62ac92ee93f6";
       public          postgres    false    217    223    3250            �           2606    16514 &   ingreso FK_ad074b7df30cd4072172d94e381    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingreso
    ADD CONSTRAINT "FK_ad074b7df30cd4072172d94e381" FOREIGN KEY ("zonaId") REFERENCES public.zonas_estrategica(id);
 R   ALTER TABLE ONLY public.ingreso DROP CONSTRAINT "FK_ad074b7df30cd4072172d94e381";
       public          postgres    false    215    3242    221            j   '   x�3����+IML/M����4�2�.M.J�pb���� ��	#      l   j   x�3�t�(-,�,NLN���2��ITH��9��J��J�|cN��Ң|ӌ3 �$�8Ķ�tJ���9C�2��Yr$楀�p:�'g$&%�&��b���� 0!g      d      x������ � �      f   �   x��M�0 ����-�}��VB.�:�3'��ܰ��<���ը�<T��ܬ�k�PƳ\��J"h!xVb�������3U�BB�	��߇�E'ne�^�I����89��[�m˦����G�p۵���' ��!�V &5      p      x������ � �      n      x������ � �      b      x������ � �      `      x������ � �      h      x�3�LL�������� $�      ^      x������ � �     