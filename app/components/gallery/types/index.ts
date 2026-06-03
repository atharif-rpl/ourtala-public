// types.ts

export type GalleryItem = {
  id: string | number // Diubah biar bisa nerima ID string dari Supabase
  title: string
  category: string
  image?: string
  imageUrl?: string   // Tambahan jaga-jaga buat data asli dari DB
  description?: string
}

// Diubah jadi string biasa biar bebas nerima kategori dinamis apa aja dari database
export type Category = string 

// Tipe baru karena kita bikin kategori otomatis jadi object {id, label} di AnimatedGallery
export type CategoryOption = {
  id: string
  label: string
}

export interface CarouselProps {
  items: GalleryItem[]
  currentIndex: number
  onNext: () => void
  onPrev: () => void
  onSelectImage: (item: GalleryItem) => void
  onIndexChange: (index: number) => void
}

export interface ModalProps {
  selectedImage: GalleryItem | null
  filteredItems: GalleryItem[]
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export interface CategoryFilterProps {
  categories: any[] // Pake any[] biar aman nerima array object {id, label}
  selectedCategory: string
  onCategoryChange: (category: string) => void
  isVisible: boolean
}