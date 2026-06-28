// ============================================================
//  Class 8 PECTTA 2026-27 – Mathematics MCQ App – script.js
// ============================================================

/* =========================================================
   QUESTION BANK
   10 Papers:
     Papers 1-5  → Chapter-wise (1 chapter each, 20 Qs)
     Papers 6-10 → Full Syllabus (mixed, 25 Qs each)
   ========================================================= */

const PAPERS = [

  /* ─────────────────────────────────────────────────────────
     PAPER 1 — Chapter 1: Rational Numbers (20 Qs)
     ───────────────────────────────────────────────────────── */
  {
    id: 1,
    title: "پیپر 1 – باب 1: Rational Numbers",
    icon: "🔢",
    type: "chapter",
    chapter: "باب 1",
    questions: [
      { q: "Which of the following is a rational number?", opts: ["√2", "π", "3/4", "√3"], ans: 2, exp: "3/4 can be written as p/q form so it is rational." },
      { q: "What is the additive inverse of -7/9?", opts: ["7/9", "-9/7", "9/7", "-7/9"], ans: 0, exp: "Additive inverse of -7/9 is +7/9." },
      { q: "Simplify: 2/3 + 1/4 = ?", opts: ["3/7", "11/12", "3/12", "5/7"], ans: 1, exp: "LCM of 3 and 4 is 12. 8/12 + 3/12 = 11/12." },
      { q: "Which property states a + b = b + a?", opts: ["Associative", "Distributive", "Commutative", "Closure"], ans: 2, exp: "Commutative property: order of addition does not matter." },
      { q: "The product of two rational numbers -2/3 × 3/4 = ?", opts: ["1/2", "-1/2", "-6/12", "6/7"], ans: 1, exp: "-2/3 × 3/4 = -6/12 = -1/2." },
      { q: "Which rational number lies between 1/2 and 3/4?", opts: ["1/4", "5/8", "7/8", "1/3"], ans: 1, exp: "5/8 = 0.625, which is between 0.5 and 0.75." },
      { q: "Multiplicative inverse of 5/7 is:", opts: ["5/7", "-5/7", "7/5", "-7/5"], ans: 2, exp: "Multiplicative inverse (reciprocal) of 5/7 is 7/5." },
      { q: "0 is a rational number because it can be written as:", opts: ["0/1", "1/0", "0/0", "None"], ans: 0, exp: "0 = 0/1, which is in p/q form where q ≠ 0." },
      { q: "Which of the following is NOT a rational number?", opts: ["22/7", "-5", "√5", "0.75"], ans: 2, exp: "√5 is irrational because it cannot be expressed as p/q." },
      { q: "Simplify: -5/6 – 1/3 = ?", opts: ["-7/6", "-4/6", "-1/2", "7/6"], ans: 0, exp: "-5/6 – 2/6 = -7/6." },
      { q: "Which set does NOT include rational numbers?", opts: ["Integers", "Natural numbers", "Irrational numbers", "Whole numbers"], ans: 2, exp: "Irrational numbers cannot be expressed as p/q with q≠0." },
      { q: "Standard form of -15/35 is:", opts: ["-1/5", "-3/7", "3/7", "-15/35"], ans: 1, exp: "HCF of 15 and 35 is 5. -15÷5 / 35÷5 = -3/7." },
      { q: "The value of (-2/3) ÷ (4/9) = ?", opts: ["-3/2", "3/2", "-8/27", "8/27"], ans: 0, exp: "-2/3 × 9/4 = -18/12 = -3/2." },
      { q: "Which property: a × (b + c) = a×b + a×c?", opts: ["Associative", "Commutative", "Distributive", "Identity"], ans: 2, exp: "Distributive property of multiplication over addition." },
      { q: "Additive identity for rational numbers is:", opts: ["1", "-1", "0", "∞"], ans: 2, exp: "Adding 0 to any rational number gives the same number." },
      { q: "Multiplicative identity for rational numbers is:", opts: ["0", "1", "-1", "2"], ans: 1, exp: "Multiplying any rational number by 1 gives the same number." },
      { q: "(-3/5) × (5/3) = ?", opts: ["1", "-1", "0", "9/25"], ans: 1, exp: "-3/5 × 5/3 = -15/15 = -1." },
      { q: "How many rational numbers exist between 0 and 1?", opts: ["10", "100", "Infinite", "0"], ans: 2, exp: "Between any two rational numbers, infinitely many rational numbers exist." },
      { q: "Which is greater: -3/4 or -5/8?", opts: ["-3/4", "-5/8", "Equal", "Cannot determine"], ans: 1, exp: "-3/4 = -6/8, and -5/8 > -6/8 so -5/8 is greater." },
      { q: "The absolute value of -7/3 is:", opts: ["-7/3", "7/3", "3/7", "-3/7"], ans: 1, exp: "Absolute value is always positive: |-7/3| = 7/3." },
    ]
  },

  /* ─────────────────────────────────────────────────────────
     PAPER 2 — Chapter 2: Squares & Square Roots (20 Qs)
     ───────────────────────────────────────────────────────── */
  {
    id: 2,
    title: "پیپر 2 – باب 2: Squares & Square Roots",
    icon: "📐",
    type: "chapter",
    chapter: "باب 2",
    questions: [
      { q: "What is the square of 13?", opts: ["169", "130", "139", "196"], ans: 0, exp: "13² = 13 × 13 = 169." },
      { q: "√196 = ?", opts: ["13", "14", "16", "12"], ans: 1, exp: "14 × 14 = 196, so √196 = 14." },
      { q: "Which number is a perfect square?", opts: ["50", "72", "81", "90"], ans: 2, exp: "81 = 9², so it is a perfect square." },
      { q: "The square of an odd number is always:", opts: ["Even", "Odd", "Prime", "Zero"], ans: 1, exp: "Odd × Odd = Odd always." },
      { q: "How many digits are in √10000?", opts: ["2", "3", "4", "5"], ans: 0, exp: "√10000 = 100, which has 3 digits. But 10000 has 5 digits and sqrt gives (n+1)/2 = 3... actually √10000=100 → 3 digits." },
      { q: "The square root of 2.25 is:", opts: ["0.15", "1.5", "0.5", "2.5"], ans: 1, exp: "1.5 × 1.5 = 2.25." },
      { q: "Find √(144/169) = ?", opts: ["12/13", "13/12", "14/16", "11/13"], ans: 0, exp: "√144/√169 = 12/13." },
      { q: "Which of the following is NOT a perfect square?", opts: ["121", "144", "200", "225"], ans: 2, exp: "200 is not a perfect square as no integer × itself = 200." },
      { q: "The smallest 3-digit perfect square is:", opts: ["100", "121", "144", "169"], ans: 0, exp: "10² = 100 is the smallest 3-digit perfect square." },
      { q: "The largest 2-digit perfect square is:", opts: ["81", "64", "99", "90"], ans: 0, exp: "9² = 81 is the largest perfect square ≤ 99." },
      { q: "Square root by prime factorization of 1764?", opts: ["42", "44", "46", "48"], ans: 0, exp: "1764 = 4 × 441 = 4 × 9 × 49; √1764 = 2×3×7 = 42." },
      { q: "A number ending in 8 is:", opts: ["Always a perfect square", "Never a perfect square", "Sometimes perfect square", "None"], ans: 1, exp: "Perfect squares end in 0,1,4,5,6,9 only. Never in 2,3,7,8." },
      { q: "√0.0064 = ?", opts: ["0.08", "0.8", "0.008", "8"], ans: 0, exp: "0.08 × 0.08 = 0.0064." },
      { q: "Number of zeros at end of a perfect square is always:", opts: ["Odd", "Even", "Prime", "1"], ans: 1, exp: "Perfect squares have even number of zeros at the end." },
      { q: "If a² = 625, then a = ?", opts: ["20", "25", "30", "35"], ans: 1, exp: "25 × 25 = 625." },
      { q: "The value of (√5 + √5) = ?", opts: ["√10", "2√5", "5√2", "√25"], ans: 1, exp: "√5 + √5 = 2√5." },
      { q: "√169 + √144 = ?", opts: ["17", "25", "24", "26"], ans: 1, exp: "13 + 12 = 25." },
      { q: "Square of -15 is:", opts: ["-225", "225", "-15", "30"], ans: 1, exp: "(-15)² = 225. Square is always positive." },
      { q: "Find the side of square with area 289 cm².", opts: ["15 cm", "17 cm", "19 cm", "21 cm"], ans: 1, exp: "Side = √289 = 17 cm." },
      { q: "Between 50 and 51, √2601 lies.", opts: ["True", "False", "Cannot say", "Need more info"], ans: 0, exp: "50² = 2500, 51² = 2601, so √2601 = 51. Exactly 51, not between." },
    ]
  },

  /* ─────────────────────────────────────────────────────────
     PAPER 3 — Chapter 3: Linear Equations (20 Qs)
     ───────────────────────────────────────────────────────── */
  {
    id: 3,
    title: "پیپر 3 – باب 3: Linear Equations",
    icon: "📏",
    type: "chapter",
    chapter: "باب 3",
    questions: [
      { q: "Solve: 2x + 5 = 13", opts: ["x = 4", "x = 3", "x = 5", "x = 6"], ans: 0, exp: "2x = 13-5 = 8; x = 4." },
      { q: "If 3x – 7 = 8, then x = ?", opts: ["3", "4", "5", "6"], ans: 2, exp: "3x = 15; x = 5." },
      { q: "Solve: x/4 = 3", opts: ["x = 7", "x = 12", "x = 1", "x = 4"], ans: 1, exp: "x = 3 × 4 = 12." },
      { q: "Which is a linear equation in one variable?", opts: ["x² + 2 = 0", "2x + 3 = 7", "x²y = 4", "xy = 5"], ans: 1, exp: "2x + 3 = 7 has degree 1 and one variable." },
      { q: "Solve: 5 – 2x = 1", opts: ["x = 2", "x = 3", "x = -2", "x = 1"], ans: 0, exp: "-2x = 1-5 = -4; x = 2." },
      { q: "If 7x = 49, then x = ?", opts: ["5", "6", "7", "8"], ans: 2, exp: "x = 49 ÷ 7 = 7." },
      { q: "The solution of 3(x - 4) = 9 is:", opts: ["x = 7", "x = 3", "x = 1", "x = 9"], ans: 0, exp: "3x - 12 = 9; 3x = 21; x = 7." },
      { q: "Solve: 2x + 3 = x + 7", opts: ["x = 4", "x = 3", "x = 2", "x = 5"], ans: 0, exp: "2x - x = 7 - 3; x = 4." },
      { q: "The age of father is 3 times son's age. Sum = 48. Son's age:", opts: ["10", "12", "14", "16"], ans: 1, exp: "s + 3s = 48; 4s = 48; s = 12." },
      { q: "Solve: (x+1)/3 = 4", opts: ["x = 11", "x = 12", "x = 9", "x = 10"], ans: 0, exp: "x + 1 = 12; x = 11." },
      { q: "Which value satisfies 4x – 3 = 2x + 7?", opts: ["x = 4", "x = 5", "x = 6", "x = 3"], ans: 1, exp: "2x = 10; x = 5." },
      { q: "The difference of two numbers is 5. Smaller is x. Larger:", opts: ["x-5", "5-x", "x+5", "5x"], ans: 2, exp: "Larger number = x + 5." },
      { q: "If 2(3x – 1) = 10, then x = ?", opts: ["1", "2", "3", "4"], ans: 1, exp: "6x – 2 = 10; 6x = 12; x = 2." },
      { q: "A number added to itself gives 30. The number is:", opts: ["10", "15", "20", "25"], ans: 1, exp: "x + x = 30; 2x = 30; x = 15." },
      { q: "Solve: 0.5x = 2.5", opts: ["x = 3", "x = 4", "x = 5", "x = 6"], ans: 2, exp: "x = 2.5 ÷ 0.5 = 5." },
      { q: "Perimeter of square is 60. Side = ?", opts: ["12", "14", "15", "20"], ans: 2, exp: "4s = 60; s = 15." },
      { q: "Solve: -3x + 6 = 0", opts: ["x = -2", "x = 2", "x = 3", "x = -3"], ans: 1, exp: "-3x = -6; x = 2." },
      { q: "Thrice a number decreased by 4 is 11. The number:", opts: ["4", "5", "6", "7"], ans: 1, exp: "3x – 4 = 11; 3x = 15; x = 5." },
      { q: "Which equation has no solution?", opts: ["x = x", "x + 1 = x + 2", "2x = 4", "x - 3 = 0"], ans: 1, exp: "x + 1 = x + 2 → 1 = 2, contradiction — no solution." },
      { q: "If 5x + 10 = 40, then x = ?", opts: ["4", "5", "6", "7"], ans: 2, exp: "5x = 30; x = 6." },
    ]
  },

  /* ─────────────────────────────────────────────────────────
     PAPER 4 — Chapter 4: Geometry / Quadrilaterals (20 Qs)
     ───────────────────────────────────────────────────────── */
  {
    id: 4,
    title: "پیپر 4 – باب 4: Quadrilaterals & Geometry",
    icon: "📐",
    type: "chapter",
    chapter: "باب 4",
    questions: [
      { q: "Sum of angles of a quadrilateral is:", opts: ["180°", "270°", "360°", "300°"], ans: 2, exp: "Sum of interior angles of any quadrilateral = 360°." },
      { q: "A parallelogram with all sides equal is called:", opts: ["Rectangle", "Square", "Rhombus", "Trapezium"], ans: 2, exp: "A rhombus has all four sides equal." },
      { q: "Diagonals of a rectangle are:", opts: ["Unequal", "Equal and bisect each other", "Perpendicular", "Not equal"], ans: 1, exp: "Diagonals of a rectangle are equal and bisect each other." },
      { q: "In a square, each angle measures:", opts: ["60°", "90°", "120°", "45°"], ans: 1, exp: "All four angles of a square are right angles (90°)." },
      { q: "A quadrilateral with exactly one pair of parallel sides:", opts: ["Parallelogram", "Rhombus", "Trapezium", "Rectangle"], ans: 2, exp: "Trapezium has exactly one pair of parallel sides." },
      { q: "Opposite angles of a parallelogram are:", opts: ["Supplementary", "Equal", "Complementary", "Different"], ans: 1, exp: "In a parallelogram, opposite angles are equal." },
      { q: "Diagonals of a rhombus bisect each other at:", opts: ["60°", "45°", "90°", "30°"], ans: 2, exp: "Diagonals of a rhombus are perpendicular bisectors of each other." },
      { q: "Number of diagonals in a quadrilateral:", opts: ["1", "2", "3", "4"], ans: 1, exp: "A quadrilateral has 2 diagonals." },
      { q: "Which quadrilateral has all sides equal and all angles equal?", opts: ["Rhombus", "Rectangle", "Square", "Trapezium"], ans: 2, exp: "A square has equal sides and equal angles (90° each)." },
      { q: "In a parallelogram ABCD, if ∠A = 70° then ∠C = ?", opts: ["110°", "70°", "90°", "140°"], ans: 1, exp: "Opposite angles of a parallelogram are equal, so ∠C = 70°." },
      { q: "∠A + ∠B in a parallelogram (adjacent angles) = ?", opts: ["90°", "180°", "270°", "360°"], ans: 1, exp: "Adjacent angles of a parallelogram are supplementary (sum = 180°)." },
      { q: "A regular quadrilateral is called:", opts: ["Rhombus", "Rectangle", "Trapezium", "Square"], ans: 3, exp: "A square is a regular quadrilateral — all sides and angles equal." },
      { q: "Diagonals of a square bisect each other at:", opts: ["30°", "60°", "90°", "45°"], ans: 2, exp: "Diagonals of a square are perpendicular to each other (90°)." },
      { q: "Area of a parallelogram = ?", opts: ["base × height", "½ × base × height", "l × b", "π r²"], ans: 0, exp: "Area of parallelogram = base × perpendicular height." },
      { q: "How many pairs of parallel sides does a parallelogram have?", opts: ["0", "1", "2", "3"], ans: 2, exp: "A parallelogram has 2 pairs of parallel opposite sides." },
      { q: "If one angle of a parallelogram is 90°, it is a:", opts: ["Rhombus", "Trapezium", "Rectangle", "Kite"], ans: 2, exp: "If one angle = 90°, all angles = 90°, making it a rectangle." },
      { q: "Exterior angle of a regular quadrilateral:", opts: ["45°", "60°", "90°", "120°"], ans: 2, exp: "360° ÷ 4 sides = 90° exterior angle." },
      { q: "A kite has:", opts: ["2 pairs of equal adjacent sides", "2 pairs of equal opposite sides", "All sides equal", "No equal sides"], ans: 0, exp: "A kite has two pairs of consecutive (adjacent) equal sides." },
      { q: "Which is true for a rectangle?", opts: ["All sides equal", "Diagonals perpendicular", "Diagonals equal", "No parallel sides"], ans: 2, exp: "In a rectangle, diagonals are equal in length." },
      { q: "The mid-point theorem states that line joining midpoints of two sides of a triangle is ____ to third side.", opts: ["Perpendicular", "Equal", "Parallel and half", "Double"], ans: 2, exp: "Mid-point theorem: the segment is parallel to and half the length of the third side." },
    ]
  },

  /* ─────────────────────────────────────────────────────────
     PAPER 5 — Chapter 5: Mensuration (20 Qs)
     ───────────────────────────────────────────────────────── */
  {
    id: 5,
    title: "پیپر 5 – باب 5: Mensuration",
    icon: "📏",
    type: "chapter",
    chapter: "باب 5",
    questions: [
      { q: "Area of a trapezium = ?", opts: ["½(a+b)×h", "(a+b)×h", "a×b×h", "½×a×b"], ans: 0, exp: "Area of trapezium = ½ × (sum of parallel sides) × height." },
      { q: "Area of a circle with radius 7 cm (π=22/7):", opts: ["154 cm²", "144 cm²", "164 cm²", "174 cm²"], ans: 0, exp: "A = π r² = 22/7 × 49 = 154 cm²." },
      { q: "Circumference of circle with diameter 14 cm:", opts: ["44 cm", "22 cm", "88 cm", "11 cm"], ans: 0, exp: "C = π d = 22/7 × 14 = 44 cm." },
      { q: "Volume of a cuboid l=5, b=4, h=3 cm:", opts: ["60 cm³", "47 cm³", "120 cm³", "50 cm³"], ans: 0, exp: "V = l × b × h = 5 × 4 × 3 = 60 cm³." },
      { q: "Total surface area of a cube with side 4 cm:", opts: ["96 cm²", "64 cm²", "48 cm²", "108 cm²"], ans: 0, exp: "TSA = 6a² = 6 × 16 = 96 cm²." },
      { q: "Lateral surface area of a cube:", opts: ["4a²", "6a²", "4a", "a³"], ans: 0, exp: "LSA of cube = 4a²." },
      { q: "Volume of a cube with side 5 cm:", opts: ["75 cm³", "100 cm³", "125 cm³", "150 cm³"], ans: 2, exp: "V = a³ = 5³ = 125 cm³." },
      { q: "Area of a rhombus = ?", opts: ["½ × d₁ × d₂", "d₁ × d₂", "base × height", "side²"], ans: 0, exp: "Area of rhombus = ½ × product of diagonals." },
      { q: "If area of square = 64 cm², perimeter = ?", opts: ["28 cm", "32 cm", "24 cm", "16 cm"], ans: 1, exp: "Side = √64 = 8 cm; P = 4 × 8 = 32 cm." },
      { q: "1 m² = how many cm²?", opts: ["100", "1000", "10000", "100000"], ans: 2, exp: "1 m = 100 cm; 1 m² = 100 × 100 = 10,000 cm²." },
      { q: "Perimeter of semicircle with radius r = ?", opts: ["πr + 2r", "2πr", "πr", "2πr + r"], ans: 0, exp: "Perimeter = πr (curved) + 2r (diameter) = πr + 2r." },
      { q: "Volume of cylinder = ?", opts: ["πr²h", "2πrh", "πr²", "2πr²h"], ans: 0, exp: "Volume of cylinder = πr²h." },
      { q: "Area of triangle with base 10 cm, height 6 cm:", opts: ["30 cm²", "60 cm²", "15 cm²", "45 cm²"], ans: 0, exp: "Area = ½ × 10 × 6 = 30 cm²." },
      { q: "The ratio of circumference to diameter of circle:", opts: ["π/2", "π", "2π", "π²"], ans: 1, exp: "C/d = π (definition of π)." },
      { q: "If radius doubles, area becomes:", opts: ["Double", "Triple", "4 times", "8 times"], ans: 2, exp: "A = πr², if r → 2r, A = π(2r)² = 4πr²; area becomes 4 times." },
      { q: "Surface area of cuboid = ?", opts: ["2(lb+bh+hl)", "lb+bh+hl", "lbh", "2lbh"], ans: 0, exp: "TSA of cuboid = 2(lb + bh + hl)." },
      { q: "Area of a parallelogram with base 8 cm, height 5 cm:", opts: ["20 cm²", "40 cm²", "13 cm²", "80 cm²"], ans: 1, exp: "Area = b × h = 8 × 5 = 40 cm²." },
      { q: "Perimeter of a rectangle l=12, b=8:", opts: ["40 cm", "96 cm", "20 cm", "48 cm"], ans: 0, exp: "P = 2(l+b) = 2(12+8) = 40 cm." },
      { q: "Which has more area: square of side 4 or circle of radius 4 (π≈3.14)?", opts: ["Square", "Circle", "Both equal", "Cannot say"], ans: 1, exp: "Square=16; Circle=3.14×16=50.24. Circle has more area." },
      { q: "Diagonal of a square with side a = ?", opts: ["a√2", "a√3", "2a", "a/√2"], ans: 0, exp: "Diagonal of square = a√2 (by Pythagoras)." },
    ]
  },

  /* ─────────────────────────────────────────────────────────
     PAPER 6 — Full Syllabus Paper 1 (25 Qs)
     ───────────────────────────────────────────────────────── */
  {
    id: 6,
    title: "پیپر 6 – مکمل نصاب (1)",
    icon: "📋",
    type: "full",
    questions: [
      { q: "Rational numbers are closed under:", opts: ["Addition only", "Multiplication only", "Both + and ×", "Division"], ans: 2, exp: "Rational numbers are closed under both addition and multiplication." },
      { q: "√(25/49) = ?", opts: ["5/7", "7/5", "25/49", "5/49"], ans: 0, exp: "√25/√49 = 5/7." },
      { q: "Solve: 4x – 3 = 13", opts: ["x = 3", "x = 4", "x = 2", "x = 5"], ans: 1, exp: "4x = 16; x = 4." },
      { q: "Sum of interior angles of pentagon:", opts: ["360°", "540°", "720°", "480°"], ans: 1, exp: "(5-2) × 180° = 540°." },
      { q: "Area of rhombus with diagonals 8 and 10:", opts: ["40 cm²", "80 cm²", "18 cm²", "20 cm²"], ans: 0, exp: "½ × 8 × 10 = 40 cm²." },
      { q: "HCF of 36 and 48 is:", opts: ["6", "12", "18", "24"], ans: 1, exp: "Factors of 36: 1,2,3,4,6,9,12,18,36. HCF(36,48)=12." },
      { q: "LCM of 4, 6, 12 is:", opts: ["12", "24", "48", "72"], ans: 0, exp: "LCM(4,6,12) = 12." },
      { q: "0.375 as a fraction:", opts: ["3/8", "3/4", "5/8", "1/4"], ans: 0, exp: "0.375 = 375/1000 = 3/8." },
      { q: "Cube of -4 is:", opts: ["64", "-64", "-16", "16"], ans: 1, exp: "(-4)³ = -64." },
      { q: "Which polynomial has degree 2?", opts: ["3x + 1", "x³", "2x² + 3", "5"], ans: 2, exp: "Degree is highest power; 2x² + 3 has degree 2." },
      { q: "Compound interest is calculated on:", opts: ["Principal only", "Principal + interest", "Interest only", "Neither"], ans: 1, exp: "CI is calculated on principal + accumulated interest." },
      { q: "Simple interest on Rs. 1000 at 5% for 2 years:", opts: ["Rs. 50", "Rs. 100", "Rs. 150", "Rs. 200"], ans: 1, exp: "SI = P×R×T/100 = 1000×5×2/100 = Rs.100." },
      { q: "The value of 2³ × 2² = ?", opts: ["2⁵", "2⁶", "4⁵", "2⁴"], ans: 0, exp: "2³ × 2² = 2^(3+2) = 2⁵ = 32." },
      { q: "Percentage increase from 80 to 100 is:", opts: ["20%", "25%", "15%", "10%"], ans: 1, exp: "(100-80)/80 × 100 = 25%." },
      { q: "Probability of getting head in coin toss:", opts: ["0", "1", "1/2", "1/4"], ans: 2, exp: "P(Head) = 1/2 = 0.5." },
      { q: "Mean of 5,10,15,20,25:", opts: ["13", "14", "15", "16"], ans: 2, exp: "Sum = 75; Mean = 75 ÷ 5 = 15." },
      { q: "Mode of: 3,3,5,7,5,5,2:", opts: ["3", "5", "7", "2"], ans: 1, exp: "5 appears 3 times (most f
