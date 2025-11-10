
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

// Define a type for our article content
interface ArticleContent {
  slug: string;
  title: string; // The main title for the <title> tag
  pageTitle: string; // The title to display on the page, possibly with emojis
  metadataLine?: string; // e.g., "By Author | Date | Source"
  fullWriteUp: string; // HTML content
  pdfSrc?: string; // Optional path to an embeddable PDF
  presentationSrc?: string; // Optional path to an embeddable presentation
}

// This is where the full content of articles will be stored.
// Updated to include only the three specified articles
const allArticlesContent: ArticleContent[] = [
  {
    slug: 'contrastive-learning-simclr-ijepa',
    title: 'Contrastive Learning: SimCLR & I-JEPA',
    pageTitle: 'Contrastive Learning: SimCLR & I-JEPA',
    metadataLine: 'CSD 662: Advanced Deep Learning',
    pdfSrc: '/reports/SimCLR_I-JEPA.pdf',
    fullWriteUp: `
      <p><em>Presentation for the graduate course CSD 662: Advanced Deep Learning.</em></p>
      
      <h2> Abstract</h2>
      <p>This presentation provides an in-depth exploration of two significant advancements in self-supervised learning: SimCLR and I-JEPA. We delve into the core concepts of contrastive learning, which enables models to learn meaningful representations from unlabeled data by maximizing agreement between different views of the same data point.</p>
      
      <h3 class="mt-6">SimCLR (A Simple Framework for Contrastive Learning of Visual Representations)</h3>
      <p>We analyze the key components of the SimCLR framework, including:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>The role of data augmentations in creating positive pairs.</li>
        <li>The importance of a projection head (MLP) for defining the contrastive loss.</li>
        <li>The effectiveness of the NT-Xent (Normalized Temperature-scaled Cross-Entropy) loss function.</li>
        <li>The impact of larger batch sizes and longer training on representation quality.</li>
      </ul>
      
      <h3 class="mt-6">I-JEPA (Image-based Joint-Embedding Predictive Architecture)</h3>
      <p>Next, we shift focus to I-JEPA, a non-contrastive, generative approach that learns by predicting representations of masked-out image blocks in an abstract space. Key aspects covered include:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>The concept of predicting in representation space rather than pixel space to encourage semantic feature learning.</li>
        <li>The architecture, comprising a context encoder, a predictor, and a target encoder.</li>
        <li>The multi-block masking strategy and its benefits for learning scalable and efficient representations.</li>
        <li>How I-JEPA avoids the "collapse" problem common in self-supervised methods without needing negative pairs or momentum encoders.</li>
      </ul>
      <blockquote class="border-l-4 border-primary pl-4 italic my-4 py-2">"By comparing and contrasting these two powerful methods, the presentation illuminates the evolving landscape of self-supervised learning and its potential to reduce reliance on large labeled datasets."</blockquote>
    `
  },
  {
    slug: 'sequential-models',
    title: 'Recurrent Neural Networks: A Mathematical Overview',
    pageTitle: 'Recurrent Neural Networks: A Mathematical Overview',
    metadataLine: 'By Jayin Khanna | MAT399: UG Seminar Presentation Report | Shiv Nadar University',
    pdfSrc: '/reports/Sequential_Models_new.pdf', // Path to your PDF in the public folder
    fullWriteUp: `
      <p><em>By Jayin Khanna | MAT399: UG Seminar Presentation Report | Shiv Nadar University</em></p>
      
      <h2> Abstract</h2>
      <p>After the advent of neural networks, multiple architectures were developed for different deep learning tasks. Recurrent Neural Networks (RNNs) are specifically designed to handle sequential data, making them essential for applications like time-series analysis, speech recognition, language models, and image/text processing.</p>
      <p>This post provides a comprehensive mathematical overview of RNNs, exploring their history, structure, training methodology, gradient dynamics, and challenges like the vanishing gradient problem.</p>
      
      <h2 class="mt-8">1.  Introduction</h2>
      <p>Sequential or time-series data require architectures beyond traditional neural networks. This report introduces sequential models, particularly RNNs, and discusses:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>History of RNNs</li>
        <li>Motivation for sequence models</li>
        <li>Preliminaries: Sequence & language modeling</li>
        <li>RNN architecture and loss functions</li>
        <li>Backpropagation through time (BPTT)</li>
        <li>Gradient computation and challenges</li>
        <li>Transition to Temporal Point Processes (TPPs)</li>
      </ul>
      
      <h2 class="mt-8">2.  History of RNNs</h2>
      <p>Emerged in the 1980s to address temporal dependencies.</p>
      <p>Introduced hidden state memory, allowing sequence learning.</p>
      <p>Faced challenges like:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>Vanishing gradients</li>
        <li>Exploding gradients</li>
      </ul>
      <p class="mt-2">Gave rise to architectures like:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>LSTMs (1990s)</li>
        <li>GRUs (2010s)</li>
      </ul>
      <p class="mt-2">These enhancements allowed RNNs to:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>Handle long-range dependencies</li>
        <li>Improve stability in training</li>
      </ul>
      
      <h2 class="mt-8">3.  Motivation for RNNs</h2>
      <p>RNNs shine in tasks involving sequential context:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>NLP</li>
        <li>Video & speech processing</li>
        <li>Financial & sensor data</li>
      </ul>
      <p class="mt-2">Unlike feedforward networks, RNNs:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>Handle variable-length sequences</li>
        <li>Retain memory using shared parameters</li>
        <li>Learn context-aware behaviors</li>
      </ul>
      <blockquote class="border-l-4 border-primary pl-4 italic my-4 py-2">“RNNs evolve a hidden state over time based on current input and previous memory.”</blockquote>
      
      <h2 class="mt-8">4.  Preliminaries: Sequence & Language Modeling</h2>
      <h3 class="mt-6">4.1 Sequence Modeling</h3>
      <p>Given sequence x = (x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>T</sub>), we want:</p>
      <p class="my-2">P(x) = P(x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>T</sub>) = P(x<sub>1</sub>) &prod;<sup>T</sup><sub>t=2</sub> P(x<sub>t</sub> | x<sub>1</sub>, ..., x<sub>t-1</sub>)</p>
      <p>Each step becomes a multi-class classification over a vocabulary.</p>
      
      <h3 class="mt-6">4.2 Language Modeling</h3>
      <p>Language models estimate:</p>
      <p class="my-2">P(x<sub>1</sub>, ..., x<sub>T</sub>), x<sub>t</sub> &isin; V</p>
      <p>Applications:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>Sentence scoring</li>
        <li>Sequence generation</li>
        <li>Embedding learning</li>
      </ul>
      
      <h3 class="mt-6">4.3 Markov Models</h3>
      <p>Simplified assumption:</p>
      <p class="my-2">P(x<sub>t</sub> | x<sub>1</sub>, ..., x<sub>t-1</sub>) &asymp; P(x<sub>t</sub> | x<sub>t-&tau;</sub>, ..., x<sub>t-1</sub>)</p>
      <p>Limitations:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>Short memory</li>
        <li>Poor performance on long-range dependencies</li>
      </ul>
      
      <h3 class="mt-6">4.4 Motivation for Neural Models</h3>
      <p>Neural networks overcome Markov limitations:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
          <li>Maintain hidden state</li>
          <li>Handle arbitrary sequence length</li>
      </ul>
      
      <h2 class="mt-8">5.  RNN Architecture</h2>
      <h3 class="mt-6">5.1 Model Structure</h3>
      <p>At time step t:</p>
      <p class="my-1">a<sup>(t)</sup> = W<sub>hx</sub>x<sup>(t)</sup> + W<sub>hh</sub>h<sup>(t-1)</sup> + b<sub>h</sub></p>
      <p class="my-1">h<sup>(t)</sup> = tanh(a<sup>(t)</sup>)</p>
      <p class="my-1">o<sup>(t)</sup> = W<sub>yh</sub>h<sup>(t)</sup> + b<sub>y</sub></p>
      <p class="my-1">y<sup>(t)</sup> = softmax(o<sup>(t)</sup>)</p>
      <p class="mt-2">Parameters: W<sub>hx</sub>, W<sub>hh</sub>, W<sub>yh</sub></p>
      <p>Biases: b<sub>h</sub>, b<sub>y</sub></p>
      
      <h3 class="mt-6">5.2 Loss Function</h3>
      <p>Given target c<sup>(t)</sup>, the cross-entropy loss is:</p>
      <p class="my-2">L = &sum;<sup>T</sup><sub>t=1</sub> -log y<sub>c(t)</sub><sup>(t)</sup></p>
      <p>Graphical intuition: As predicted probability drops, loss increases sharply—encouraging confidence and accuracy.</p>
      
      <h2 class="mt-8">6.  Backpropagation Through Time (BPTT)</h2>
      <p>Gradient descent is used for training. For that, gradients are needed:</p>
      <h3 class="mt-6">6.1 Local Gradients</h3>
      <p class="my-2">&delta;<sup>(t)</sup> = &part;L / &part;a<sup>(t)</sup> = (&part;L / &part;h<sup>(t)</sup>) &SmallCircle; (1 - tanh<sup>2</sup>(a<sup>(t)</sup>))</p>
      <h3 class="mt-6">6.2 Parameter Gradients</h3>
      <p class="my-1">&part;L / &part;W<sub>hx</sub> = &sum;<sup>T</sup><sub>t=1</sub> &delta;<sup>(t)</sup>x<sup>(t)T</sup></p>
      <p class="my-1">&part;L / &part;W<sub>hh</sub> = &sum;<sup>T</sup><sub>t=1</sub> &delta;<sup>(t)</sup>h<sup>(t-1)T</sup></p>
      <p class="my-1">&part;L / &part;W<sub>yh</sub> = &sum;<sup>T</sup><sub>t=1</sub> (&part;L<sup>(t)</sup> / &part;o<sup>(t)</sup>) h<sup>(t)T</sup></p>
      <h3 class="mt-6">6.3 Recursive Gradient Flow</h3>
      <p class="my-2">&part;L / &part;h<sup>(t-1)</sup> = (W<sub>hh</sub><sup>T</sup>&delta;<sup>(t)</sup>) &SmallCircle; (1 - tanh<sup>2</sup>(a<sup>(t-1)</sup>))</p>
      
      <h2 class="mt-8">7.  Gradient Accumulation</h2>
      <h3 class="mt-6">7.1 Gradient Unrolling</h3>
      <p class="my-2">&part;L / &part;W<sub>hh</sub> = &sum;<sup>T</sup><sub>t=1</sub> &sum;<sup>t</sup><sub>k=1</sub> ( &prod;<sup>t</sup><sub>j=k+1</sub> (&part;h<sup>(j)</sup> / &part;h<sup>(j-1)</sup>) &sdot; (&part;h<sup>(k)</sup> / &part;W<sub>hh</sub>) )</p>
      <h3 class="mt-6">7.2 General Gradient Form</h3>
      <p class="my-2">&part;L<sup>(t)</sup> / &part;W = (&part;L<sup>(t)</sup> / &part;h<sup>(t)</sup>) &sum;<sup>t</sup><sub>k=1</sub> ( (&part;h<sup>(t)</sup> / &part;h<sup>(k)</sup>) &sdot; (&part;h<sup>(k)</sup> / &part;W) )</p>
      
      <h2 class="mt-8">8.  Training with Gradient Descent</h2>
      <p>With learning rate &eta;:</p>
      <p class="my-1">W<sub>hx</sub> &larr; W<sub>hx</sub> - &eta; (&part;L / &part;W<sub>hx</sub>)</p>
      <p class="my-1">W<sub>hh</sub> &larr; W<sub>hh</sub> - &eta; (&part;L / &part;W<sub>hh</sub>)</p>
      <p class="my-1">W<sub>yh</sub> &larr; W<sub>yh</sub> - &eta; (&part;L / &part;W<sub>yh</sub>)</p>
      
      <h2 class="mt-8">9.  Challenges: Vanishing/Exploding Gradients</h2>
      <h3 class="mt-6">9.1 Vanishing Gradient Problem</h3>
      <p>Gradients vanish when: || &part;h<sub>t</sub> / &part;h<sub>i</sub> || &rarr; 0 as t-i &rarr; &infin;</p>
      <p class="mt-2">Causes:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>Poor learning of long-term dependencies</li>
        <li>Slow convergence</li>
        <li>Bias toward recent inputs</li>
      </ul>
      
      <h3 class="mt-6">9.2 Exploding Gradients</h3>
      <p>If the gradient norm grows exponentially &rarr; numerical instability.</p>
      <p class="mt-2">Remedies:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>Use LSTMs or GRUs</li>
        <li>ReLU-like activations</li>
        <li>Gradient clipping</li>
        <li>Truncated BPTT</li>
        <li>Residual connections</li>
      </ul>
      <div class="overflow-x-auto my-6">
        <table class="min-w-full border-collapse border border-border text-sm">
          <thead>
            <tr class="bg-muted/50">
              <th class="border border-border p-2 text-left font-medium text-card-foreground">Model</th>
              <th class="border border-border p-2 text-left font-medium text-card-foreground">Sequential Input</th>
              <th class="border border-border p-2 text-left font-medium text-card-foreground">Memory</th>
              <th class="border border-border p-2 text-left font-medium text-card-foreground">Gradient Issues</th>
            </tr>
          </thead>
          <tbody class="bg-card">
            <tr>
              <td class="border border-border p-2">MLP</td>
              <td class="border border-border p-2"></td>
              <td class="border border-border p-2"></td>
              <td class="border border-border p-2"></td>
            </tr>
            <tr>
              <td class="border border-border p-2">RNN</td>
              <td class="border border-border p-2"></td>
              <td class="border border-border p-2"></td>
              <td class="border border-border p-2"></td>
            </tr>
            <tr>
              <td class="border border-border p-2">LSTM</td>
              <td class="border border-border p-2"></td>
              <td class="border border-border p-2"></td>
              <td class="border border-border p-2"></td>
            </tr>
            <tr>
              <td class="border border-border p-2">N-gram</td>
              <td class="border border-border p-2"> (fixed)</td>
              <td class="border border-border p-2"></td>
              <td class="border border-border p-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 class="mt-8">10.  Toward Neural Temporal Point Processes (TPPs)</h2>
      <p>RNNs are limited to discrete-time modeling.</p>
      <p>Real-world events (e.g. transactions, medical events) often occur irregularly. TPPs model this using neural networks + temporal point process theory.</p>
      <p class="mt-2">Why This Shift Matters:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>Models event timing, not just sequence</li>
        <li>Extends gradient insights from BPTT to continuous-time</li>
        <li>Builds on your understanding of RNN gradients</li>
      </ul>
      
      <h2 class="mt-8"> References</h2>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>Oleksandr Shchur et al. Neural Temporal Point Processes: A Review. arXiv:2104.03528</li>
        <li>A. Zhang et al. Dive into Deep Learning. <a href="https://d2l.ai/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">https://d2l.ai/</a></li>
      </ul>
    `
  },
  {
    slug: 'principal-component-analysis',
    title: 'Principal Component Analysis',
    pageTitle: 'Principal Component Analysis',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/PCA (1).pdf',
    fullWriteUp: `
      <p>This document provides a comprehensive overview of Principal Component Analysis, including its mathematical underpinnings, applications, and practical considerations.</p>
      <p>Please refer to the embedded PDF below for the full content.</p>
      <p>Key topics typically covered in such a report would include:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>Introduction to Dimensionality Reduction</li>
        <li>Mathematical Foundations: Variance, Covariance, Eigenvectors, Eigenvalues</li>
        <li>The PCA Algorithm: Step-by-Step</li>
        <li>Interpreting Principal Components</li>
        <li>Applications of PCA (e.g., image compression, feature extraction in ML)</li>
        <li>Limitations and Considerations</li>
        <li>Examples and Case Studies</li>
      </ul>
    `
  },
  {
    slug: 'neural-networks-fundamentals',
    title: 'Neural Networks: Foundations and Architectures',
    pageTitle: 'Neural Networks: Foundations and Architectures',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/Neural_Networks (4).pdf',
    fullWriteUp: `
      <p>This document explores the fundamental concepts and various architectures of Neural Networks, serving as a foundational guide to understanding deep learning.</p>
      <p>Please refer to the embedded PDF below for the full content.</p>
      <p>Key topics typically covered in such a report would include:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>Introduction to Neural Networks: Inspiration from the Brain</li>
        <li>The Perceptron and Multi-Layer Perceptrons (MLPs)</li>
        <li>Activation Functions (Sigmoid, Tanh, ReLU, etc.)</li>
        <li>Loss Functions and Optimization (Gradient Descent, Backpropagation)</li>
        <li>Common Neural Network Architectures (CNNs, RNNs, LSTMs, Transformers - overview)</li>
        <li>Training, Validation, and Testing</li>
        <li>Regularization Techniques (Dropout, L1/L2)</li>
        <li>Applications across various domains</li>
      </ul>
    `
  },
  {
    slug: 'explainable-ai',
    title: 'Explainable AI: Attribution techniques',
    pageTitle: 'Explainable AI: Attribution techniques',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/Attribution_techniques.pdf',
    fullWriteUp: `
      <p><em>By Jayin Khanna | Topic Report</em></p>
      
      <h2> Abstract</h2>
      <p>As deep learning models become more complex and are deployed in high-stakes domains like healthcare and finance, understanding *why* a model makes a particular decision is crucial. Explainable AI (XAI) provides techniques to interpret and understand the inner workings of these "black box" models. This report focuses on attribution techniques, which aim to assign importance scores to input features based on their contribution to the model's output.</p>
      
      <h2 class="mt-8">1.  Introduction to Explainable AI (XAI)</h2>
      <p>XAI is a field of artificial intelligence that aims to make AI systems more transparent and understandable to humans. The key motivations for XAI include:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li><strong>Trust:</strong> Building user trust in AI-powered systems.</li>
        <li><strong>Debugging:</strong> Identifying and correcting errors in model behavior.</li>
        <li><strong>Fairness:</strong> Ensuring that models are not biased against certain groups.</li>
        <li><strong>Compliance:</strong> Meeting regulatory requirements for model transparency.</li>
      </ul>
      
      <h2 class="mt-8">2.  Attribution Techniques</h2>
      <p>Attribution techniques are a class of XAI methods that explain a model's prediction by assigning a relevance or importance score to each input feature. These methods help answer the question: "Which parts of the input were most important for this specific prediction?"</p>

      <h3 class="mt-6">2.1 Gradient-based Methods</h3>
      <p>These methods use the gradients of the output with respect to the input features to determine their importance. The intuition is that features with larger gradients have a greater impact on the output.</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li><strong>Saliency Maps:</strong> The simplest method, which visualizes the absolute value of the gradients. It highlights pixels in an image that most affect the output score.</li>
        <li><strong>Integrated Gradients:</strong> Addresses the saturation problem of simple gradients by integrating gradients along a path from a baseline input (e.g., a black image) to the actual input. It satisfies important axioms like sensitivity and implementation invariance.</li>
        <li><strong>Grad-CAM (Gradient-weighted Class Activation Mapping):</strong> Produces a coarse localization map highlighting the important regions in the image for predicting the concept. It uses the gradients of the target concept flowing into the final convolutional layer.</li>
      </ul>
      <blockquote class="border-l-4 border-primary pl-4 italic my-4 py-2">"Integrated Gradients is a simple, powerful, and widely applicable method for attributing a neural network's predictions to its input features."</blockquote>
      
      <h3 class="mt-6">2.2 Perturbation-based Methods</h3>
      <p>These methods work by systematically perturbing (e.g., removing, masking, or altering) parts of the input and observing the change in the model's output. Features whose perturbation causes a significant drop in the prediction score are considered important.</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li><strong>Occlusion Sensitivity:</strong> A patch of the input (e.g., a gray square) is moved across the input, and the model's output is recorded for each position. This creates a heatmap of importance.</li>
        <li><strong>LIME (Local Interpretable Model-agnostic Explanations):</strong> A model-agnostic technique that explains individual predictions by learning a simpler, interpretable model (e.g., a linear model) in the local neighborhood of the prediction.</li>
      </ul>

      <h2 class="mt-8">3.  Visualizing Attributions</h2>
      <p>For image data, attribution scores are often visualized as heatmaps overlaid on the original image. For text data, words can be highlighted based on their importance scores.</p>
      <p>These visualizations provide an intuitive way to understand what the model is "looking at" when making a decision.</p>

      <h2 class="mt-8">4.  Challenges and Limitations</h2>
      <p>While powerful, attribution techniques have limitations:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li><strong>Faithfulness:</strong> The explanation may not be a faithful representation of what the model is actually doing.</li>
        <li><strong>Robustness:</strong> Explanations can be sensitive to small, imperceptible changes in the input.</li>
        <li><strong>Human-level Concepts:</strong> Attribution methods operate on low-level features (e.g., pixels) and may not capture higher-level concepts that humans use for reasoning.</li>
      </ul>
      
      <h2 class="mt-8"> References</h2>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>Sundararajan, Mukund, Ankur Taly, and Qiqi Yan. "Axiomatic attribution for deep networks." <i>ICML 2017</i>.</li>
        <li>Selvaraju, Ramprasaath R., et al. "Grad-cam: Visual explanations from deep networks via gradient-based localization." <i>ICCV 2017</i>.</li>
        <li>Ribeiro, Marco Tulio, Sameer Singh, and Carlos Guestrin. ""Why should I trust you?": Explaining the predictions of any classifier." <i>KDD 2016</i>.</li>
      </ul>
    `
  },
  {
    slug: 'generative-models-overview',
    title: 'Generative Models: A Mathematical Overview',
    pageTitle: 'Generative Models: A Mathematical Overview',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/GANs-2.pdf',
    fullWriteUp: `
      <p>This document provides a comprehensive overview of Generative Models, including the mathematical underpinnings of VAEs, GANs, and Diffusion Models.</p>
      <p>The PDF for this report will be added soon.</p>
    `
  },
  {
    slug: 'statistics-generative-models',
    title: 'Statistics for Generative models',
    pageTitle: 'Statistics for Generative models',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/Transformation_of_RVs-2.pdf',
    fullWriteUp: `
      <p>This document explores the statistical foundations essential for understanding and developing generative models.</p>
      <p>The PDF for this report will be added soon.</p>
    `
  },
  {
    slug: 'speech-tsm-gans',
    title: 'Speech Time-Scale Modification with GANs',
    pageTitle: 'Speech Time-Scale Modification with GANs',
    metadataLine: 'By Jayin Khanna | Research Project',
    pdfSrc: '/reports/tsm.pdf',
    fullWriteUp: `
      <p>This report details a research project on using Generative Adversarial Networks (GANs) for Time-Scale Modification (TSM) of speech signals.</p>
      <p>The PDF for this report will be added soon.</p>
    `
  },
  {
    slug: 'variational-autoencoders',
    title: 'Variational Autoencoders (VAEs)',
    pageTitle: 'Variational Autoencoders (VAEs)',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/VAE.pdf',
    fullWriteUp: `
      <p>This document provides an overview of Variational Autoencoders (VAEs), covering their theoretical foundations and practical applications in generative modeling.</p>
      <p>The PDF for this report will be added soon.</p>
    `
  },
  {
    slug: 'speech-tsm-gans-presentation',
    title: 'Speech time-scale modification using GANs- Presentation',
    pageTitle: 'Speech time-scale modification using GANs- Presentation',
    metadataLine: 'Lab Talk | SPIRE Lab, IISc Bangalore | Summer Research Fellow, IAS',
    pdfSrc: '/reports/speech-tsm-presentation.pdf',
    fullWriteUp: `
      <p>This document is a PDF of a presentation on "Speech time-scale modification using GANs".</p>
      <p>This presentation was delivered as a lab talk at the SPIRE Lab, IISc Bangalore, during my tenure as a Summer Research Fellow, a fellowship awarded by the Indian Academy of Sciences (IASc).</p>
      <p>Please refer to the embedded PDF below for the full presentation.</p>
    `
  },
];

async function getArticleData(slug: string): Promise<ArticleContent | null> {
  return allArticlesContent.find(article => article.slug === slug) || null;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleData(params.slug);
  if (!article) {
    return { title: 'Article Not Found' };
  }
  return {
    title: `${article.title} | Research`,
    description: `An article titled: ${article.title}. Penned by Jayin Khanna.`,
  };
}

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = await getArticleData(params.slug);

  if (!article) {
    return <div className="container mx-auto py-20 text-center text-muted-foreground">Article not found.</div>;
  }

  return (
    <div className="container mx-auto py-12 md:py-20 max-w-4xl">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-headline mb-3 text-primary">{article.pageTitle}</h1>
        {article.metadataLine && !article.fullWriteUp.includes(article.metadataLine) && (
            <p className="text-muted-foreground italic mb-6">{article.metadataLine}</p>
        )}
      </header>

      {article.fullWriteUp && (
        <article className="prose prose-invert prose-lg max-w-none 
                          text-foreground/90 
                          prose-headings:text-primary prose-headings:font-headline
                          prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8
                          prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
                          prose-p:leading-relaxed 
                          prose-a:text-accent hover:prose-a:underline
                          prose-strong:text-foreground 
                          prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-blockquote:italic
                          prose-code:bg-muted prose-code:p-1 prose-code:rounded-md prose-code:text-sm prose-code:font-code
                          prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:text-sm prose-pre:font-code
                          prose-table:my-6 prose-table:text-sm prose-table:w-full prose-table:border-collapse
                          prose-th:border prose-th:border-border prose-th:p-2 prose-th:font-medium prose-th:text-left prose-th:bg-muted/30
                          prose-td:border prose-td:border-border prose-td:p-2
                          prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-1 prose-ul:my-2
                          prose-li:my-1
                          ">
          <div dangerouslySetInnerHTML={{ __html: article.fullWriteUp }} />
        </article>
      )}
      
      {article.presentationSrc && (
        <section className={`my-12 ${article.fullWriteUp.length > 200 ? 'pt-8 border-t border-border/40' : ''}`}>
          <h2 className="text-3xl font-headline mb-6 text-primary text-center">
            Presentation
          </h2>
          <div className="aspect-video w-full">
            <iframe
              src={article.presentationSrc}
              frameBorder="0"
              allowFullScreen={true}
              className="w-full h-full border rounded-lg shadow-md"
              title={article.title + " - Presentation"}
              aria-label={article.title + " - Presentation"}
            >
              <p className="p-4 text-muted-foreground">Your browser does not support embedded presentations. You might need to use a different browser, check your settings, or view it directly.</p>
            </iframe>
          </div>
        </section>
      )}

      {article.pdfSrc && (
        <section className={`my-12 ${article.fullWriteUp.length > 200 ? 'pt-8 border-t border-border/40' : ''}`}>
          <h2 className="text-3xl font-headline mb-6 text-primary text-center">
            {article.fullWriteUp.length > 200 ? "Full Report (PDF)" : "Document (PDF)"}
          </h2>
          <div className="relative w-full" style={{ paddingTop: '141.42%' /* Aspect ratio for A4 paper (297/210) */ }}>
            <iframe
              src={article.pdfSrc}
              type="application/pdf"
              className="absolute top-0 left-0 w-full h-full border rounded-lg shadow-md"
              title={article.title + " - PDF Document"}
              aria-label={article.title + " - PDF Document"}
            >
              <p className="p-4 text-muted-foreground">Your browser does not support embedded PDFs. You might need to use a different browser, check your settings, or <a href={article.pdfSrc} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">download the PDF directly</a>.</p>
            </iframe>
          </div>
        </section>
      )}

      <Separator className="my-12 bg-border/40" />
      
      <section className="text-center">
        <Button asChild variant="link" className="text-accent text-lg">
          <Link href="/"> &larr; Back to Home</Link>
        </Button>
      </section>
      <div className="mt-8 text-xs text-muted-foreground text-center">
          Note: Mathematical formulas are rendered using basic HTML and Unicode characters. For complex expressions, LaTeX rendering (not currently implemented) may be required for optimal display.
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = allArticlesContent.map(article => ({
    slug: article.slug,
  }));
  return slugs;
}
