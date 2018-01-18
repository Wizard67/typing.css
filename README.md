<h1>中文排版：<a href="https://github.com/Wizard67/typing.css">typing.css</a></h1>
<p>typing.css 是一个负责页面文字排版的 CSS 组件，通过对常用 HTML 文本标签进行样式重置以提供更为舒适的中文排版效果，并致力于解决以下问题：</p>
<ul>
	<li>
		<dl>
		  <dt>排版标签语义化</dt>
		  <dd>尽可能地减少 class 和 id 的使用，让页面代码结构清晰整洁。</dd>
		</dl>
	</li>
	<li>
		<dl>
		  <dt>重视中文排版效果</dt>
		  <dd>重置部分标签样式，使之符合<a href="https://www.w3.org/TR/clreq/">中文排版需求</a>。</dd>
		</dl>
	</li>
	<li>
		<dl>
		  <dt>响应式排版设计</dt>
		  <dd>不同分辨率采用不同的排版策略，通过对字体、行间距的调整，以优化不同设备的阅读体验。</dd>
		</dl>
	</li>
</ul>
<h2>如何使用</h2>
<p>你可以在 <a href="https://github.com/Wizard67/typing.css">Github</a> 中下载到 typing.css。</p>
<p>于 <code>&#60;head&#62;</code> 中引入css后，在容器标签中添加 <code>class="typing"</code> 即可。</p>
<div class="typing-autoWrap">
	<pre><code>&#60;head&#62;<br>	&#60;link rel="stylesheet" type="text/css" href="./css/typing.css"&#62;<br>&#60;/head&#62;<br>&#60;body&#62;<br>	&#60;article class="typing"&#62;<br>		...<br>	&#60;/article&#62;<br>&#60;/body&#62;</code></pre>
</div>
<h2>排版效果</h2>
<p>为了满足中文排版的需求，<code>typing.css</code> 为 <code>inline boxes</code> 设置了合适的<code>line-height</code>，使之在显示中文时行间不会显得太过拥挤。以下两段排版实例来自 <abbr title="亚瑟·叔本（Arthur Schopenhauer），德国著名哲学家">叔本华</abbr> Aphorismen zur Lebensweisheit 的中英文翻译。</p>
<h3>中文排版实例：</h3>
<blockquote>
	<p>《人生的智慧》，韦启昌译（第23-24页）：</p>
</blockquote>
<p>同样，耶稣说：“愚人的生活比死亡还要槽糕。”因此，我们可以发现：大致而言，一个人对与人交往的爱好程度，跟他的智力的平庸思想的贫乏成正比。<em>人们在这个世界上要么选择独处，要么选择庸俗，除此以外再没有更多别的选择了。</em></p>
<h3>英文排版实例：</h3>
<blockquote>
	<p>The Wisdom of Life, translated by Bailey Saunders (page 62)：</p>
</blockquote>
<p>A very true saying, with which may be compared the words of Jesus, the son of Sirach, The life of a fool isworse than death. And, as a rule, it will be found that a man is sociable just in the degree in which he isintellectually poor and generally vulgar. <strong>For one's choice in this world does not go much strongeyondsolitude on one side and vulgarity on the other. </strong></p>
<h2>标签列表</h2>
<div class="typing-autoWrap">
	<table>
	  <thead>
	  <tr>
	    <th>类型</th>
	    <th>标签</th>
	    <th>样式修改</th>
	  </tr>
	  </thead>
	  <tbody>
	  <tr>
	  	<td>全局</td>
	  	<td><code>.typing</code></td>
	  	<td>默认字体颜色: <code>#07090c</code>，字号和行高响应分辨率。</td>
	  </tr>
	  <tr>
	    <td>标题</td>
	    <td><code>&#60;h1&#62;</code>~<code>&#60;h6&#62;</code></td>
	    <td>使样式符合语义，<code>&#60;h3&#62;</code>~<code>&#60;h6&#62;</code>设置统一字号。自动编号。</td>
	  </tr>
	  <tr>
	  	<td>分割线</td>
	  	<td><code>&#60;hr&#62;</code></td>
	  	<td>修改默认颜色，设置外边距。</td>
	  </tr>
	  <tr>
	  	<td>段落</td>
	  	<td><code>&#60;p&#62;</code></td>
	  	<td>设置合适的行高与段间距。</td>
	  </tr>
	  <tr>
	    <td>列表</td>
	    <td><code>&#60;ul&#62;</code> | <code>&#60;ol&#62;</code> | <code>&#60;dl&#62;</code></td>
	    <td>修改无序和有序列表的列表符号，统一排版风格；增强定义列表联系。</td>
	  </tr>
	  <tr>
	    <td>表格</td>
	    <td><code>&#60;table&#62;</code></td>
	    <td>重置默认样式。表格外层容器添加<code>class="typing-autoWrap"</code>，可响应式支持。</td>
	  </tr>
	  <tr>
	    <td>代码块</td>
	    <td><code>&#60;pre&#62;</code></td>
	    <td>设置等宽字体。外层容器可添加<code>class="typing-autoWrap"。</td>
	  </tr>
	  <tr>
	    <td>引用块</td>
	    <td><code>&#60;blockquote&#62;</code></td>
	    <td>修改样式。可包裹其他样式列表内的标签。</td>
	  </tr>
	  <tr>
	    <td>内容块</td>
	    <td><code>&#60;figure&#62;</code></td>
	    <td>添加外边距，可包裹其他样式列表内的标签。</td>
	  </tr>
	  <tr>
	    <td>短引用</td>
	    <td><code>&#60;q&#62;</code></td>
	    <td>引用符号修改为直角引号。</td>
	  </tr>
	  <tr>
	  	<td>链接</td>
	  	<td><code>&#60;a&#62;</code></td>
	  	<td>使用<code>border-bottom</code>显示下划线，修改默认颜色，<code>:hover</code>颜色继承父级。</td>
	  </tr>
	  <tr>
	  	<td>代码</td>
	  	<td><code>&#60;code&#62;</code></td>
	  	<td>继承全局字体。</td>
	  </tr>
	  <tr>
	    <td>着重</td>
	    <td><code>&#60;em&#62;</code></td>
	    <td>正体，强调语气。在<code>Webkit内核</code>中添加着重号，<code>IE浏览器</code>内渲染为粗体。</td>
	  </tr>
	  <tr>
	    <td>强调</td>
	    <td><code>&#60;strong&#62;</code></td>
	    <td>正体、粗体，强调程度最高。</td>
	  </tr>
	  <tr>
	    <td>删除</td>
	    <td><code>&#60;del&#62;</code></td>
	    <td>默认删除线样式。</td>
	  </tr>
	  <tr>
	    <td>缩写</td>
	    <td><code>&#60;abbr&#62;</code></td>
	    <td>修改鼠标手势为<code>help</code>，设置底部虚线。</td>
	  </tr>
	  <tr>
	    <td>上下标</td>
	    <td><code>&#60;sup&#62;</code> | <code>&#60;sub&#62;</code></td>
	    <td>字号为<code>0.8em</code>，行高为<code>1</code>。</td>
	  </tr>
	  <tr>
	    <td>图片</td>
	    <td><code>&#60;img&#62;</code></td>
	    <td>居中显示。</td>
	  </tr>
	  </tbody>
	</table>
</div>
<h3>文字样式</h3>
<ul>
	<li><q>&#60;q&#62;<q>短引用</q></q></li>
	<li><del>&#60;del&#62; 删除</del></li>
	<li>上标<sup>&#60;sup&#62;</sup> —— 下标<sub>&#60;sub&#62;</sub></li>
	<li><code>&#60;code&#62; 代码</code></li>
	<li><em>&#60;em&#62; 着重（webkit 内核显示着重号，IE 显示粗体）</em></li>
	<li><strong>&#60;strong&#62; 强调</strong></li>
	<li><a href="###">&#60;a&#62; 链接</a></li>
</ul>
<h2>样式详解</h2>
<h3>font 与版面</h3>
<p>typing.css 会根据 <code>媒体查询</code> 自动调整合适的 font 属性和版面边距。</p>
	<div class="typing-autoWrap">
		<table>
			<thead>
				<tr>
					<th>分辨率 (px)</th>
					<th>&#60; 544</th>
					<th>545 - 768</th>
					<th>769 - 992</th>
					<th>993 - 1380</th>
					<th>1381 &#60;</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>正文字号</td>
					<td>14 px</td>
					<td>14 px</td>
					<td>15 px</td>
					<td>16 px</td>
					<td>17 px</td>
				</tr>
				<tr>
					<td>行间距</td>
					<td>1.6</td>
					<td>1.68</td>
					<td>1.8</td>
					<td>1.82</td>
					<td>1.86</td>
				</tr>
				<tr>
					<td>段落间距</td>
					<td>1.2</td>
					<td>1.4</td>
					<td>1.6</td>
					<td>1.6</td>
					<td>1.6</td>
				</tr>
				<tr>
					<td><del>版面内距</del></td>
					<td><del>4 vw</del></td>
					<td><del>4 vw</del></td>
					<td><del>0.6 rem</del></td>
					<td><del>0.8 rem</del></td>
					<td><del>1 rem</del></td>
				</tr>
				<tr>
					<td>对齐方式</td>
					<td>左对齐</td>
					<td>左对齐</td>
					<td>两端对齐</td>
					<td>两端对齐</td>
					<td>两端对齐</td>
				</tr>
			</tbody>
		</table>
	</div>
<h3>图片</h3>
<img src="demo/test.png">