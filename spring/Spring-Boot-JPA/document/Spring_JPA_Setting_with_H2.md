### Spring boot JPA 설정 

> Spring Boot 버전 : 2.2.5  

1. H2 데이터베이스 설치 및 실행

    H2 공식 사이트(https://www.h2database.com/html/main.html) 에서 다운받는다. 

    ```
    # 터미널 실행 

    cd /h2/bin
    chmod +x h2.sh
    ./h2.sh
    ```

2. Spring boot 프로젝트에서 JPA와 DB 환경 설정 

    `application.yml` 파일 내 아래 코드 작성 

    ```
    spring:
    datasource:
        url: jdbc:h2:tcp://localhost/~/jpashop
        username: username
        password: password
        driver-class-name: org.h2.Driver

    jpa:
        hibernate:
        ddl-auto: create
        properties:
        hibernate:
            format_sql: true

    logging:
    level:
        org.hibernate.SQL: debug

    ```

3. 테스트 코드 작성 

    Member Entity 및 Repository 작성 

    `Member.java` 

    ```
    @Data
    @Getter @Setter
    public class Member {

        @Id @GeneratedValue
        private Long id;
        private String username;

    }
    ```

    `MemberRepository.java` 

    ```
    @Repository
    public class MemberRepository {

        @PersistenceContext
        private EntityManager em;

        public Long save(Member member) {
            em.persist(member);
            return member.getId();
        }

        public Member find(Long id) {
            return em.find(Member.class, id);
        }
    }
    ```

    Junit4로 테스트 코드 작성

    `MemberRepositoryTest.java`

    ```
    @RunWith(SpringRunner.class)
    @SpringBootTest
    public class MemberRepositoryTest {

        @Autowired MemberRepository memberRepository;

        @Test
        @Transactional
        public void testMember() throws Exception {

            //given
            Member member = new Member();
            member.setUsername("memberA");

            //when
            Long savedId = memberRepository.save(member);
            Member findMember = memberRepository.find(savedId);

            //then
            Assertions.assertThat(findMember.getId()).isEqualTo(member.getId());

        }
    }
    ```

    테스트 코드가 정상적으로 동작하면 성공이다!

