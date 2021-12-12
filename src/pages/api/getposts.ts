import type { NextApiRequest, NextApiResponse } from 'next'
import { PostData } from '../../types/post';

const posts: PostData[] = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil officia incidunt eum natus perferendis! Rem, tempora quisquam! Repudiandae molestiae nulla, consequuntur obcaecati eos totam in expedita ut molestias cumque?
Asperiores fuga vel nemo a unde laborum perspiciatis. Iure, eveniet quidem officia recusandae magni illum soluta quisquam ratione suscipit, at esse voluptate aperiam totam labore quos? Impedit facere dolorum nam.
Ex nobis facere reiciendis adipisci doloremque! Iusto quibusdam voluptas illo laudantium quaerat, ipsa dolores quae ipsam magnam rem, ullam molestias consequuntur saepe voluptatem magni illum! Animi veniam fugiat blanditiis ipsa.
Explicabo nisi voluptas maxime ducimus sed. Aperiam voluptates maxime maiores fuga dicta perferendis ducimus molestiae reprehenderit dolorem distinctio excepturi fugit debitis expedita quis consequuntur ipsam hic inventore voluptas, minima aliquid.
Impedit dolorum cupiditate nulla. Voluptatem est quos quo facilis, ea iste atque necessitatibus perferendis odio! Corrupti, necessitatibus fugiat. Excepturi iure fugiat quae delectus blanditiis nemo eaque perferendis cupiditate similique velit.
Velit repudiandae id dolores explicabo ipsa totam quaerat, impedit, molestias maxime molestiae, esse vero aliquid accusantium quasi vel ipsam similique fugit expedita amet qui! Obcaecati, perspiciatis reprehenderit? Nam, autem ab.
Itaque voluptas neque iusto mollitia deserunt hic. Impedit ratione tempore at in cupiditate officia eligendi quasi numquam asperiores, quas neque praesentium accusantium obcaecati ducimus dolor necessitatibus blanditiis, minus, itaque quod!
Officia mollitia a ex, omnis qui quae natus enim cumque molestiae soluta? Numquam similique voluptates iusto inventore pariatur accusantium suscipit rerum. Nulla distinctio rem incidunt quo adipisci deserunt eum eos?
Assumenda, facilis placeat et ea commodi voluptatum id libero qui consequatur ut modi praesentium corporis quod perferendis perspiciatis veritatis sit, nesciunt voluptatibus pariatur cupiditate porro. Dignissimos distinctio laboriosam ratione necessitatibus.
Non itaque veritatis saepe veniam expedita, ipsa inventore, deserunt sequi aperiam eligendi quidem dolorem voluptatum nesciunt, eos distinctio ipsum optio perferendis sint pariatur voluptates possimus aliquid sed dolore? Commodi, laudantium!
Explicabo, nihil nulla tempora laborum facilis voluptates error maxime quo labore officiis porro? Odit aperiam asperiores accusantium maxime voluptate ducimus magni maiores explicabo nihil, totam quas. Ipsum aspernatur tenetur itaque?
Dolorum incidunt voluptates ducimus. Quia esse optio nihil dolorem distinctio eum earum est sequi animi dignissimos. Voluptatem delectus ad voluptate explicabo molestiae nam fugit, sint minima, quibusdam sit non id?
Reprehenderit, aliquam optio? Fugiat, dolore dicta non illo assumenda asperiores ratione enim, commodi debitis ullam laboriosam. Soluta explicabo dolorum, velit necessitatibus quo praesentium sit culpa optio eligendi distinctio ipsam atque.
Alias fugiat autem voluptatibus delectus. Earum sequi quasi optio quidem veniam vel aliquid beatae quod. Aspernatur saepe inventore consectetur natus, error illum quas exercitationem ea. Iusto sed molestias ad optio?
Atque labore possimus suscipit ut incidunt quidem veniam laboriosam assumenda obcaecati, quae vel esse fugiat similique vitae ea accusamus at pariatur molestiae delectus excepturi! Quasi, libero explicabo. Dolor, distinctio odit.
Nobis a nesciunt veniam similique, quisquam nostrum fugit nihil repudiandae officia? Itaque veniam voluptas officiis esse? Voluptas cum ut voluptate deserunt. At consequatur nesciunt placeat optio nulla sequi praesentium quisquam.
Itaque voluptates, unde ab distinctio officia quasi? Enim beatae iste necessitatibus, explicabo magnam ad delectus laudantium eveniet fugit, vero praesentium perferendis sequi, sapiente modi voluptatem possimus commodi dignissimos autem accusantium.
Possimus asperiores veniam molestias iusto, recusandae beatae porro itaque distinctio adipisci delectus. Quos, dignissimos labore accusantium vitae in, dolorum tempora eveniet sit veniam cumque, inventore perferendis harum quod deleniti. Accusantium.
Eligendi quas vitae fugit sed illum nesciunt possimus tenetur minima? Exercitationem voluptatum, voluptas sequi placeat ut ratione! Natus consequuntur facilis, corrupti minus officiis assumenda omnis amet excepturi delectus odio! Quisquam.
Perferendis magni illo nesciunt nulla libero dolorem quas numquam quam animi eos earum exercitationem, quisquam expedita porro at reprehenderit excepturi illum consequuntur! Dolorum aliquam quis repellat iusto modi. Totam, repudiandae?
Magni voluptatem, sunt dolorum voluptas at culpa dolores, excepturi, ex labore delectus officia dolor necessitatibus! Delectus nostrum aspernatur voluptatem hic dolor itaque, eveniet sit amet, velit natus sed unde distinctio.
Culpa odio ipsum enim, hic nisi a obcaecati illo rerum. Eos, asperiores nemo veritatis illum minus temporibus natus iusto, corrupti tenetur nesciunt eum rerum consectetur, in libero nobis ratione provident!
Aliquam maxime vitae nobis perspiciatis sint laudantium corrupti ullam voluptatem architecto doloribus deleniti perferendis magnam tenetur inventore corporis, nesciunt enim eum modi quam tempora eligendi alias eaque laboriosam! Quos, maiores!
A fuga, corrupti blanditiis possimus vitae quos soluta vero perferendis quisquam repellendus asperiores fugiat cumque dolorem nulla. Perspiciatis ducimus alias vero deleniti ex eius consequatur molestiae, maxime ad aut ea.
Veritatis eaque assumenda iure mollitia, odit consectetur laudantium ullam ducimus nisi dolore odio optio harum! Unde laborum provident cupiditate ab libero mollitia autem obcaecati odit, hic minima, ratione dolorum fugit!
Soluta praesentium quae dolor necessitatibus, eaque temporibus vitae deserunt qui porro nulla expedita quam dolores iure accusantium saepe cumque officia amet repellendus, deleniti vero! Dolore iusto modi officiis nobis eius?
Quidem rem odit consectetur, ea dolor voluptates dolores non blanditiis, tempora natus, quibusdam maiores sit optio consequuntur! Expedita consequuntur, odit, placeat, ea tempore asperiores quas quo ab saepe nulla consequatur!
Soluta distinctio, voluptates amet voluptatem minus facere asperiores omnis saepe reiciendis maiores ipsum, cupiditate corrupti deserunt neque, sapiente rem officia nostrum adipisci non sed! Omnis cumque facere magnam tempora perspiciatis.
Aspernatur reprehenderit atque perspiciatis facilis vero voluptates in aliquid asperiores ab repellat, nihil quisquam qui sapiente odio dolorem illo explicabo accusamus eveniet cum impedit reiciendis? Enim asperiores facilis eos impedit.
Eveniet blanditiis dolorum eum voluptatum quod provident nemo dolorem unde? Iure alias veritatis omnis iusto molestiae sapiente earum dicta. Sunt voluptas facere placeat quae consequatur impedit ipsum dolore dolores dignissimos?
Dolores earum tempore ea! Earum non quae placeat tempora doloremque. Saepe facilis pariatur quod at voluptatum quaerat aliquid architecto doloribus illum nemo. Ullam, debitis ab! Excepturi, minima. Temporibus, velit quaerat.
Quam tempore qui nesciunt natus sunt, amet aut laboriosam aperiam numquam, fuga eaque commodi omnis dicta delectus. Odio unde quibusdam cumque dicta, aliquam sequi et vitae assumenda, repudiandae fuga maiores!
Sunt officia aspernatur debitis nam incidunt magni excepturi, perferendis officiis, amet repudiandae molestiae fuga. Neque recusandae excepturi, et dolor repellat minima saepe deserunt, perferendis, ipsa atque amet corporis magnam iste.
Suscipit aut eveniet rerum, quos minima quisquam tempore incidunt at, asperiores quaerat cupiditate animi corporis, id vel. Commodi perspiciatis quo a nulla, officiis rem veniam, dolore magni quasi corporis explicabo?
Vitae fuga voluptate ipsa distinctio impedit expedita sunt earum laboriosam asperiores hic voluptatum voluptatem numquam facere fugiat magnam voluptatibus corporis, enim iste accusantium natus libero atque quas! Illo, temporibus vero.
Mollitia ullam neque reprehenderit ipsa fugit ipsum culpa eaque eum assumenda fuga. Culpa dicta asperiores ipsa architecto maxime nihil adipisci numquam nulla corrupti, fuga a, vero ad soluta eaque modi.
Sunt neque mollitia dolorum beatae earum quasi non pariatur qui explicabo fugiat sint quaerat corrupti, totam error dignissimos molestiae quis at voluptas, nam animi officiis soluta veniam a facilis. Quis!
Voluptatum voluptates consequuntur assumenda veniam impedit maxime possimus, corrupti ea, reiciendis nostrum mollitia! Vitae facere vero ullam a est quam! Nostrum exercitationem qui veniam ea, magni iusto fugiat deserunt vel!
Sed ipsa earum ratione quasi, laboriosam perferendis at velit. Iure possimus, quidem harum sit dolorum sunt, dolorem voluptates, alias veritatis ducimus ipsam sequi rem esse labore quis cumque voluptatibus earum?
Possimus esse eos consequuntur porro veniam. Eaque maxime unde quae sequi quis explicabo voluptatibus, possimus, minima repellat ut alias quas sit corporis ratione voluptas labore dicta earum ad iusto vero.
Dolores quibusdam eveniet, natus officia quos beatae eius quisquam aut voluptas, reiciendis et, nemo quidem voluptate! Accusamus maiores at architecto perspiciatis eius consequatur temporibus voluptatem id dignissimos iure? Laborum, earum?
Possimus quibusdam sunt alias veniam neque nam cumque quis ullam, dolor, earum reiciendis? Nam dolores vero quos iure asperiores, illum, nostrum distinctio numquam quod suscipit impedit veniam laboriosam excepturi ad.
Aperiam mollitia totam reprehenderit, cum nulla iste ea doloribus dolores et autem nam voluptates cumque animi dignissimos fugit. Minus quod voluptates placeat ex natus obcaecati sunt sequi quo laboriosam hic!
Ut corrupti delectus magnam sit quibusdam dignissimos beatae quas nostrum laudantium, sapiente rem deleniti, sunt possimus architecto enim itaque mollitia impedit nisi. Recusandae explicabo, voluptas officia sequi dicta deserunt eveniet?
Ullam tempore blanditiis aspernatur, quo fuga expedita suscipit? Animi sit et fugiat cum rerum dicta voluptate dignissimos cumque iusto laborum sunt ut temporibus laboriosam, aut soluta architecto adipisci dolores minima!
Tenetur laboriosam doloremque repellat, quo veniam, explicabo, numquam nemo corrupti voluptas minus sunt modi ratione deleniti ea officia in? Enim illo, nihil quam excepturi tempore itaque aspernatur tempora fugit odio.
Quasi repellendus rerum numquam. Tenetur necessitatibus, culpa, repellat magnam veritatis nulla facere accusantium ipsam quisquam placeat hic dignissimos fugit laboriosam in reiciendis quas voluptatem excepturi expedita, adipisci voluptatibus soluta pariatur!
Laboriosam, repellendus error in voluptatem illum ea blanditiis minima odio alias aperiam ipsum quos, quo praesentium. Facilis blanditiis, voluptas neque excepturi dolore, doloremque perspiciatis atque pariatur, praesentium in soluta quidem?
Quo, veniam? Eos laborum nostrum quo nemo, possimus autem, aut cumque earum itaque aliquam distinctio. Voluptatem aliquam obcaecati vel harum dolor dolorum, cupiditate necessitatibus, nisi accusantium non amet! Qui, facere?
Vero autem eveniet, aliquid error, doloremque vitae sapiente cupiditate vel eum distinctio voluptates fuga natus amet accusantium temporibus nihil, pariatur beatae ullam earum esse odio officia voluptatum est. In, delectus?
Laudantium excepturi illum animi, nam nemo accusamus provident nesciunt, deserunt ipsa voluptatum corporis quod alias tenetur nihil veritatis doloremque quo eum! Voluptatem repellat placeat nulla molestias sapiente omnis facere est.
Asperiores blanditiis unde dignissimos sapiente consequatur quibusdam saepe minima ab sit, esse quod a facere exercitationem nemo laboriosam neque ex distinctio, rem commodi libero cumque veritatis? Quidem, impedit est. Itaque.
Alias delectus error fugiat doloremque illo ab corrupti esse ipsa in? In odit voluptatibus corrupti id saepe magni blanditiis explicabo nobis incidunt velit aspernatur, et dolores architecto excepturi. Maiores, perspiciatis?
Possimus sapiente voluptates, amet cum nisi quaerat at, accusamus adipisci nihil veniam corporis. Facere libero id autem repudiandae aliquid sapiente dolorum alias unde optio adipisci! Impedit doloremque explicabo aliquid hic!
Distinctio odio porro libero fugiat rem ducimus, provident dolores cupiditate facere eligendi. Neque, possimus unde. Aliquid, ab et. Exercitationem consectetur quo sequi, harum cupiditate maiores saepe? Illum voluptates saepe voluptas!
Voluptatem rerum repellendus unde minus veritatis. Earum impedit, cumque molestias expedita eveniet voluptate suscipit vero sit, sint doloribus neque. Nesciunt quaerat iusto excepturi, libero amet voluptates accusamus quas consequatur soluta.
Qui, necessitatibus dolorum? Culpa consectetur, dolorem, quos mollitia quis accusamus voluptatem modi unde fuga odit soluta at dicta. Architecto temporibus cumque iure aspernatur, obcaecati omnis tempore nihil eius quis doloribus!
Est, repudiandae aut expedita aspernatur velit laboriosam, provident sequi modi nam minima, corrupti quae? Quidem voluptatem facilis blanditiis animi natus rerum soluta dicta unde odio ducimus, itaque ratione eos in.
Repellat beatae suscipit dolorem excepturi quia enim repudiandae quas fugiat veritatis ipsam. Tempora eius officia culpa repellat fugiat facere, temporibus sit sapiente nesciunt molestias eaque delectus autem voluptatibus a fuga?
Iusto esse sunt maxime magnam modi reiciendis neque veritatis cupiditate commodi eligendi. Vero, repudiandae, libero unde architecto illum provident placeat laboriosam ab, laborum sapiente aliquam doloribus beatae explicabo debitis aliquid.
Provident aspernatur alias repellat cum quisquam nesciunt tempora magnam doloribus nihil temporibus amet dolorem facere sit, nam, voluptas necessitatibus dolor optio error est pariatur vel totam iusto. Ullam, eligendi ad?
Tempore reiciendis facilis adipisci illo impedit optio nisi, natus minus similique in repellendus distinctio alias, ratione labore ex dolorem facere, aut numquam exercitationem deserunt aperiam? Eligendi repellendus distinctio iste blanditiis!
Nesciunt rerum voluptatibus, beatae illum quos, tempore laudantium quia consequatur autem libero, necessitatibus nemo! Dolorum quas exercitationem ex, commodi, libero maxime maiores aliquam, officia est voluptate accusamus laborum aperiam culpa.
Reprehenderit corporis ipsam dolore rerum nihil magnam temporibus distinctio enim saepe tenetur accusantium, nostrum quae. Non omnis porro distinctio adipisci deleniti iusto sed error, quod beatae quaerat odit? In, eaque.
Sapiente est, ipsam dolorum ipsum atque repellendus facilis tenetur in iusto dolores culpa. Dolore provident repudiandae ratione molestiae, voluptatem optio sunt in est non architecto ex? Beatae maxime laudantium quos.
Fugit eveniet at nesciunt nam quos quia aliquam sit deserunt. Porro repellendus quia maiores impedit sit quod itaque totam laboriosam excepturi. Aliquam sint adipisci, maxime voluptas laudantium labore quasi unde!
Architecto modi ducimus ipsam, facere saepe eveniet nemo accusantium et tempora iure sit eius quos repellat ipsa cupiditate? Sequi quidem placeat atque. Iste possimus quia magni repellat ipsa minus minima!
Sit consectetur magnam vitae voluptatibus neque maiores modi cumque, ullam quo magni totam at earum ipsam reiciendis excepturi nostrum deserunt placeat saepe fugit, ipsum aperiam aliquam quos mollitia commodi. Eum.
Suscipit neque ab voluptates nam placeat eligendi rem recusandae ullam voluptate temporibus quidem sequi incidunt sit quia rerum, distinctio magni? Nisi ullam laudantium dolore sequi numquam officia corrupti accusantium sunt!
Dolores aliquam assumenda quod debitis quam facilis fugiat voluptates quasi, nisi blanditiis omnis magni recusandae eaque inventore quas natus fuga ipsam, quo nemo beatae provident quidem in impedit nam. Exercitationem.
Accusamus autem corrupti doloribus laboriosam cumque impedit optio atque, iusto iste necessitatibus inventore pariatur cum laborum ratione voluptatem? Tenetur enim ut eum doloremque pariatur quod provident cumque vitae iure alias.
Ab fugiat suscipit facilis quasi odio vitae tempore, saepe iusto, labore quisquam nemo reiciendis laborum! Ut quibusdam repellat laborum exercitationem deserunt pariatur eligendi ea, aspernatur non optio, iusto dignissimos voluptas.
Repellendus possimus praesentium reprehenderit quas dolor enim atque qui amet commodi corrupti fugiat voluptates tenetur provident, inventore minima ex. Molestiae accusamus nihil dolores praesentium nam reiciendis? Nisi deleniti perferendis laborum.
Quibusdam eveniet libero asperiores soluta! Laudantium temporibus neque obcaecati, nobis alias ipsam similique ipsa? Adipisci natus eum repellendus sequi corporis magnam quia consequatur. Voluptas sit rerum, sequi doloremque nihil velit.
Laboriosam dignissimos quidem hic. Architecto, aliquid vitae commodi repellendus sequi earum cumque maiores laboriosam expedita soluta magni quibusdam eum rem nihil velit nostrum autem quam magnam ducimus facere, in blanditiis.
Reiciendis, dolores officia placeat eos aperiam iusto doloremque, voluptate minus numquam expedita, debitis fugit? Placeat sed delectus repudiandae, consequatur illum tempore, excepturi incidunt, facilis distinctio odio voluptates minima quibusdam debitis.
Est, nobis aperiam necessitatibus saepe incidunt molestias consequatur dignissimos ducimus obcaecati officia soluta fuga odio fugiat nemo ab amet similique illum hic nostrum. Inventore vitae necessitatibus doloribus dignissimos eligendi! Doloremque.
Deleniti dolor quidem quia reiciendis corrupti, ratione dolores consectetur neque error excepturi officiis? Similique asperiores cupiditate rerum. Voluptatum, nulla, excepturi beatae quisquam doloribus saepe laborum sunt sed necessitatibus error veniam.
Natus qui velit nulla corrupti eum exercitationem. Consequatur facere dolorem fugiat ea laboriosam quam dolorum laborum delectus aperiam, expedita ullam, facilis nesciunt. Cum facere voluptas sequi cupiditate iure? Asperiores, illum!
Ea soluta corporis culpa sed? Sapiente, in. Labore laudantium eos magnam veritatis voluptatibus voluptatem ducimus ea sunt, fuga corporis consequuntur maxime illo similique qui eaque, ratione nesciunt error velit placeat?
Dignissimos pariatur culpa quisquam enim consectetur vel laborum eius deserunt dolor beatae ex, maxime voluptates, eveniet optio. Excepturi totam voluptates porro, magnam aliquam, accusantium voluptatum iure at reprehenderit facere minus.
Quasi, nobis doloribus. Nulla commodi omnis repudiandae maiores numquam sed hic saepe voluptatum vel iure, similique temporibus libero itaque officia cupiditate optio vero veritatis! Eos libero optio voluptates tenetur laudantium?
Accusantium aspernatur ab obcaecati, accusamus facere veritatis. Eaque sequi, temporibus rem mollitia numquam vero? Aut praesentium reiciendis quia ex molestiae, perspiciatis consectetur quasi reprehenderit ducimus neque architecto, odio totam a?
Facilis vero ea fugiat odit repellendus illum rem, at qui cumque nesciunt molestiae, numquam nisi, beatae ex tempore a? Modi magnam ratione unde velit ad blanditiis recusandae a vel pariatur?
Deleniti atque laudantium obcaecati quam laboriosam deserunt mollitia blanditiis cumque consequatur quia numquam eaque facere rerum sapiente explicabo recusandae, quae, neque beatae sed minus, officia expedita dolores facilis libero! Eaque.
Nihil nostrum iste unde maiores temporibus nisi. Illo provident iusto in dignissimos iste distinctio saepe placeat architecto vero minima cumque facere commodi alias, corrupti quasi ipsam quidem non officiis voluptate.
Facilis aut, mollitia tenetur nam architecto cumque earum esse temporibus molestias, perspiciatis autem corporis tempora et rerum facere deleniti commodi ad numquam recusandae libero ut doloremque cum alias dignissimos? Natus?
Praesentium, excepturi cum facere sed sapiente recusandae dolorem laborum eaque. Ab quos accusantium debitis aut eaque sed in nostrum unde? Laboriosam nemo quam architecto modi corrupti omnis iusto a velit?
Soluta ea eos sed veniam quas repellat libero velit voluptatibus odit dolor, at repudiandae laborum aperiam consequatur nobis dolores ab quibusdam suscipit quod distinctio impedit possimus eius consectetur. Magni, blanditiis.
Neque molestias labore adipisci at quis fugit expedita, rerum doloribus magnam voluptatibus dolore distinctio veniam nostrum culpa asperiores cumque dolor quia? Laudantium libero sapiente voluptate doloremque aperiam provident magni quis?
Reiciendis aspernatur ratione eius deserunt repellat sapiente, rem quia. Dolores qui numquam possimus alias pariatur, soluta sapiente facere, veniam tenetur, quod dolorum vitae animi earum laudantium vero labore rem tempora.
Accusamus quibusdam veritatis hic esse excepturi, voluptate beatae nisi consequuntur ipsa eligendi iure eaque. Alias quis ea rerum eaque odio numquam dicta esse architecto non saepe, ex impedit, iure repellat.
Repellat eius dolorem itaque explicabo perferendis nemo, quia alias earum, sed asperiores mollitia veniam velit assumenda non? Facilis maiores expedita iusto? Quos vero deleniti laborum, eum eius eos dignissimos a?
Earum tempore odio, voluptatum nostrum dolores error quidem eaque in illum vitae provident quia quasi atque ea commodi hic velit aspernatur sed accusamus? Qui nobis cum, dolor quisquam eos natus.
Blanditiis, dolores enim? Quae fuga quos iusto ad totam illo saepe, sequi nam soluta. Pariatur repellendus nemo tenetur totam cupiditate commodi aut officiis expedita atque, neque inventore non eum quisquam!
Eius sit expedita temporibus nisi dicta eligendi qui itaque quidem ab aspernatur hic est dolorum voluptatum nesciunt, repellendus vero ad sapiente? Ut iure, est totam illo libero fugiat. Reiciendis, accusantium.
Quo quos ipsum temporibus sed. Sit tempore aspernatur vitae eius quaerat ratione nam earum, nesciunt velit autem cum eveniet distinctio magni harum facere modi. Similique doloribus iure corrupti adipisci perspiciatis.
Ducimus repellat molestias illum recusandae natus cumque corporis error explicabo eveniet, quo dolor. Delectus odio praesentium id culpa odit adipisci error nobis ea quae reiciendis! Cupiditate corrupti laborum rem expedita!
Temporibus ducimus quas sint vero porro? Reprehenderit odio dolor dolorum molestiae minima sit eveniet ea officia atque illo neque odit consequuntur cumque, voluptatibus architecto harum quibusdam a deleniti. Eaque, itaque?
Sint aliquam molestiae eaque, beatae magni eos atque repellendus doloremque dolor, error explicabo, deserunt tempora sequi similique vel saepe qui ut culpa? Nobis mollitia, vel impedit deleniti pariatur rem numquam!`
.split("\n").map((u, i)=>{
	return {
		id: i.toString(),
		content: u,
		comments: [],
		author: "User "+Math.floor(Math.random()*20),
		attachments: [],
		likes: 0,
		isLiked: false,
		timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5 * i)
	}
})

export default function(req: NextApiRequest, res: NextApiResponse<{posts: PostData[]}>) {
	if (req.method!="GET") { res.status(405); return}

	const lastIndex = req.query.last?posts.findIndex((u)=>{return u.id===req.query.last}):-1;
	
	res.json({
		posts: posts.slice(lastIndex+1, lastIndex+10)
	})	
}